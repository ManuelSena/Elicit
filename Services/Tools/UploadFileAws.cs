//using System;
//using System.Collections.Generic;
//using System.IO;
//using System.Linq;
//using System.Web;

//namespace ElicitPodcast.Services.Tools
//{
//    public class UploadFileAws
//    {
//        static string existingBucketName = "sabio-training";
//        static string existingURL = "https://sabio-training.s3-us-west-2.amazonaws.com/";

//        public string UploadFile(Stream file, string fileName)
//        {
//            string newFileName = Guid.NewGuid() + "_" + fileName;
//            //FileStream fileStream = new FileStream(filePath, FileMode.Open, FileAccess.Read);
//            try
//            {

//                var accessKey = AppSettingConfig.Instance.GetByAppKey("AWSAccessKey"); // GET FROM DATABASE LATER
//                var secretKey = AppSettingConfig.Instance.GetByAppKey("AWSSecretKey"); // GET FROM DATABASE LATER

//                TransferUtility fileTransferUtility = new
//                           TransferUtility(new AmazonS3Client(accessKey, secretKey, Amazon.RegionEndpoint.USWest2));

//                fileTransferUtility.Upload(file, existingBucketName, newFileName);

//            }
//            catch (AmazonS3Exception s3Exception)
//            {
//                return s3Exception.Message;
//            }
//            return existingURL + newFileName;
//        }
//    }
//}