// const CareerCounsellor = require('../models/careerCounsellor')

// exports.newCareerCounsellor = async (req, res) => {
//     const careercounsellor = new CareerCounsellor({
//         counsellor_name: req.body.counsellor_name,
//         creatorId: req.body.creatorId,
//         designation: req.body.designation,
//         placeofwork: req.body.placeofwork,
//         fieldofexpert: req.body.fieldofexpert,
//         linkedin: req.body.linkedin,
//         personallink: req.body.personallink,
//         contact: req.body.contact,
//         description: req.body.description,
//         image: req.file.path,
//         });
    
//         try {
//         await careercounsellor.save();
//         } catch (error) {
//         return res.status(201).json({
//             message: `CareerCounsellor Add failed, check to see the ${error}`,
//             status: "error",
//         });
//         }
//     };

// exports.getCareerCounsellor = async (req, res) => {

//     const careercounsellor = await CareerCounsellor.find();

//     res.status(200).json(careercounsellor)

// }


// exports.updateCareerCounsellor = async (req, res) => {

//     let careercounsellor = await CareerCounsellor.findById(req.params.id);
  
//     if(!careercounsellor) {
//         return res.status(404).json({
//             success: false, 
//             message: 'Course not found'
//         })
//     }
  
//     careercounsellor = await CareerCounsellor.findByIdAndUpdate(req.params.id, ({

//         counsellor_name: req.body.counsellor_name,
//         designation: req.body.designation,
//         placeofwork: req.body.placeofwork,
//         fieldofexpert: req.body.fieldofexpert,
//         linkedin: req.body.linkedin,
//         personallink: req.body.personallink,
//         contact: req.body.contact,
//         description: req.body.description,
//         image: req.file.path
        
//       }), {
//         new: true,
//         runValidators: true,
//         useFindAndModify: false
//     });
  
//     res.status(200).json({
//         success: true,
//         careercounsellor
//     })
  
//   }
  
// exports.deleteCareerCounsellor = async (req, res) => {

//     const careercounsellor = await CareerCounsellor.findByIdAndDelete(req.params.id);

//     if(!careercounsellor) {
//         return res.status(404).json({
//             success: false,
//             message: 'CareerCounsellor not found'
//         })
//     }

//     await careercounsellor.remove();

//     res.status(200).json({
//         success: true,
//         message: 'CareerCounsellor is deleted'
//     })

// }