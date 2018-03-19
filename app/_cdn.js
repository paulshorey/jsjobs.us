/*
	process.env
*/
process.env.PATH = __dirname;
process.env.PORT = 1080;
const DEV = process.env.NODE_ENV === "development";
/*
	global.shh
*/
global.shh = require("/www/secret/all.js"); // not on GitHub!
/*
	global.rqr
*/
global.rqr = global.rqr || {};
global.rqr.fs = require("fs");
global.rqr.path = require("path");
/*
	global.S3 (AWS)
*/
process.env.AWS_ACCESS_KEY_ID = global.shh.AWS.ACCESS_KEY_ID;
process.env.AWS_SECRET_ACCESS_KEY = global.shh.AWS.SECRET_ACCESS_KEY;
process.env.AWS_SESSION_TOKEN = global.shh.AWS.SESSION_TOKEN;
global.S3 = require("aws-sdk/clients/s3");
global.S3UploadToBucket = function(name, content) {
	// bucket
	var bucket = new global.S3({ apiVersion: "2006-03-01" });
	var bucketParams = { Bucket: "jsresultsapi" };
	// file
	bucketParams.Body = content;
	bucketParams.Key = name;
	bucketParams.ContentType = "text/json; charset=utf-8";
	bucketParams.ContentDisposition = "inline";
	// upload
	bucket.upload(bucketParams, function(err, data) {
		if (err) {
			console.log("Error", err);
		}
		if (data) {
			console.log("Upload Success", data.Location);
		}
	});
};

/*
    DO IT
*/
// configuration
// const bucket = new global.S3({ apiVersion: "2006-03-01" });
// const bucketName = "jsresults";
// const uploadFolder = function uploadFolderRelative(uploadFolder = "./") {
// 	console.log("uploading " + uploadFolder);
// 	const config = {
// 		s3BucketName: bucketName,
// 		folderPath: global.rqr.path.join(__dirname, uploadFolder)
// 	};
// 	// get of list of files from 'dist' directory
// 	global.rqr.fs.readdir(config.folderPath, (err, files) => {
// 		if (!files || files.length === 0) {
// 			console.log(`provided folder '${config.folderPath}' is empty or does not exist.`);
// 			return;
// 		}
// 		// for each file in the directory
// 		for (const fileName of files) {
// 			// get the full path of the file
// 			const filePath = global.rqr.path.join(config.folderPath, fileName);
// 			// ignore if directory
// 			if (global.rqr.fs.lstatSync(filePath).isDirectory()) {
// 				console.log("what... " + global.rqr.path.basename(filePath));
// 				const newFilePath = global.rqr.path.basename(filePath);
// 				uploadFolderRelative(uploadFolder + "/" + newFilePath);
// 			}
// 			// read file contents
// 			global.rqr.fs.readFile(filePath, (error, fileContent) => {
// 				// if unable to read file contents, throw exception
// 				if (error) {
// 					throw error;
// 				}
// 				// upload file to bucket
// 				bucket.putObject(
// 					{
// 						Bucket: config.s3BucketName,
// 						Key: fileName,
// 						Body: fileContent
// 					},
// 					res => {
// 						console.log(`Successfully uploaded '${fileName}'!`);
// 					}
// 				);
// 			});
// 		}
// 	});
// };
// uploadFolder("./build/public");

/*
    DO IT BETTER
*/
const bucket = new global.S3({ apiVersion: "2006-03-01" });
const bucketName = "jsresults";
function traverseDirectory(dirname, callback) {
	var directory = [];
	global.rqr.fs.readdir(dirname, function(err, list) {
		dirname = global.rqr.fs.realpathSync(dirname);
		if (err) {
			return callback(err);
		}
		var listlength = list.length;
		list.forEach(function(file) {
			file = dirname + "/" + file;

			global.rqr.fs.stat(file, function(err, stat) {
				if (stat && stat.isDirectory()) {
					traverseDirectory(file, function(err, parsed) {
						directory = directory.concat(parsed);
						if (!--listlength) {
							callback(null, directory);
						}
					});
				} else {
					directory.push({ filename: file, contenttype: "" });
					// read file contents
					global.rqr.fs.readFile(file, (error, fileContent) => {
						// if unable to read file contents, throw exception
						if (error) {
							throw error;
						}
						// upload file to bucket
						// console.log(file.replace(realDirname + "/", ""));
						var fileName = file.replace(realDirname + "/", "");
						bucket.putObject(
							{
								Bucket: bucketName,
								Key: fileName,
								Body: fileContent
							},
							res => {
								console.log(`Successfully uploaded '${fileName}'!`);
							}
						);
					});

					if (!--listlength) {
						callback(null, directory);
					}
				}
			});
		});
	});
}
const searchDir = "/build/public";
const realDirname = __dirname + searchDir;
traverseDirectory(realDirname, function(err, file) {
	if (err) {
		console.log("ERROR! " + err);
	}

	// console.log(file);
});
