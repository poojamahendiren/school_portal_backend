const express = require("express");                                                              
const Students = require('../models/students.model');                                          
const router = express.Router();


router.get('/students',(req,res)=>{
    try{
        Students.find((err, data) => {                                                     
            if(err){
                return res.send({message: 'Error while retrieving students. Please check the data'});
            }

            res.status(200).send(data);
        })
        
    }catch(error){

        res.status(500).   send({
            message: 'Internal Server Error'
        })
    }
});


router.post('/students',async (req,res)=>{
    try {
        const payload = req.body;

        const newStudent = new Students(payload);

        await newStudent.save((err, data)=> {
            if(err){
                return res.status(400).send({message: 'Error while adding new student. Please check the data'});
            }

            res.status(201).send({studentId: data._id, message: "Student has been added successfully." })
        })

    } catch (error) {
        res.status(500).send({
            message: "Internal Server Error"
        })
    }

})



    router.put('/students/:stdID',(req,res)=>{
        try {
            Students.findByIdAndUpdate({_id: req.params.stdID}, {$set: req.body}, (err, data) =>{
                if(err){
                    return res.status(400).send({message: 'Error while updating an existing student. Please check the data'})
                }
    
                res.status(201).send({studentId: data._id, message: "Student details have been updated."})
            });
        } catch (error) {
            res.status(500).send({
                message: "Internal Server Error"
            });
        }
        
    });
    
    
    
    router.delete('/students/:stdID',(req,res)=>{
        try{
            Students.deleteOne({_id: req.params.stdID}, (err, data) => {
                if(err){
                    return res.status(400).send('Error while deleting an student. Please check the data');
                }
    
                res.status(200).send({message : `Student with id ${req.params.empID} has been deleted.`})
            })
        }catch(error){
            res.status(500).send({
                message: "Internal Server Error"
            })
        }
    });

    router.get('/students/:stdID', (req, res) => {
        try{
            Students.findOne({_id: req.params.stdID}, (err, data) => {
                if(err){
                    return res.status(400).send({message: 'Error while retrieving an student. Please check the data'})
                }
    
                res.status(200).send(data);
            })
        }catch(error){
            res.status(500).send({
                message: 'Internal Server Error'
            })
        }
    });
    
    

module.exports = router; 