import path from 'path';
import multer from 'multer';

const __dirname = path.resolve();



const auth = async (req, res, next) => {
   try {
    
      const storage = multer.diskStorage({
         destination: (req, file, cb) => {
            cb(null, __dirname + '/src/uploads/')
         },
         filename: (req, file, cb) => {
            cb(null, file.fieldname + "-" + Date.now() + "-" + file.originalname)
         }
       });
     
       const fileFilter = (req, file, cb) => {
          
        if((file.mimetype).includes('jpeg') || (file.mimetype).includes('png') || (file.mimetype).includes('jpg')){
            cb(null, false);
        } else {
            cb(null, true);
        }
     };
        
     const upload = multer({ storage: storage, fileFilter: fileFilter });
 
 
     return res.status(HTTP_UNAUTHORIZED).json({
       status: HTTP_UNAUTHORIZED,
       message: INVALID_TOKEN
     });
   } catch (err) {
     return res.status(HTTP_UNAUTHORIZED).json({
       status: HTTP_UNAUTHORIZED,
       message: INVALID_TOKEN
     });
   }
 };
 



export default upload;
