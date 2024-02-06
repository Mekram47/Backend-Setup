import { v2 as cloudinary} from "cloudinary";

import fs from "fs";
          
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async(localFilePath)=>{
    try {
        if(!localFilePath) return null
        // upload file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
          // File has been uploaded Successfuly on Cloudinary//
          console.log("File has been uploaded ",response.url);
          return response
        
    } catch (error) {
           // This is for remove file for failed Operation in uploading the file//
        fs.unlinkSync(localFilePath) ;
        
        return null
    }
    
}

export {uploadOnCloudinary}





