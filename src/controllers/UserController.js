import xlsx from 'xlsx';
import path from 'path';
import db from '../database/models';
import * as status from '../constants/httpStatusCodes';
import * as successMessages from '../constants/successMessages';

const { User } = db;

const __dirname = path.resolve();

/**
 * a class to handle Data from Excel
 */
export default class UserController {
  /**
   * @description Excel User data function
   * @param {object} req
   * @param {object} res
   * @return {Promise} response object
   */
  static async uploadFile(req, res) {

    let filePatha = __dirname + "/src/uploads/" + req.file.filename;

    const workbook = xlsx.readFile(filePatha);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]

    const users = [];
    let user = {};

    for (let cell in worksheet){

        const cellAsString = cell.toString();
        
        // Parse excel input into an array
        if(cellAsString[1] !== 'r' 
        && cellAsString !== 'm' && cellAsString[1] > 1){
            if(cellAsString[0] === 'A') {
                user.names = worksheet[cell].v;
            }
            if(cellAsString[0] === 'B'){
                user.nid = worksheet[cell].v
            }
            if(cellAsString[0] === 'C'){
                user.phone = worksheet[cell].v
            }
            if(cellAsString[0] === 'D'){
                user.gender = worksheet[cell].v
            }
            if(cellAsString[0] === 'E'){
                user.email = worksheet[cell].v
                users.push(user);
                user = {}
            }  
        }
    }

    User.bulkCreate(users).then(() => {
        return (
            res.status(status.HTTP_CREATED).json({
                status: status.HTTP_CREATED,
                filename: req.file.originalname,
                message: successMessages.UPLOAD_SUCCESS,
            })
        );
    });
  }
}
