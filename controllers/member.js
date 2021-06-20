const express = require('express');
const Member = require('../models/member');

exports.getAllMember =async(req,res)=> {
    try {
        const allmember = await Member.find();            
        res.status(200).json({
            message:"Members of this library",
            data:allmember,
        })
    } catch (error) {
        res.json({
            error:error
        })
    }
}
exports.addMember = async(req,res) => {
    const member = new Member({
        fullName : req.body.fullName,
        membership : req.body.membership,   
       })
    try {
       const memberadded = await member.save();
       res.status(201).json({
        message: 'post request successful',
        memberadded: memberadded
       })
    } catch (error) {
        res.json({
            error:error
        })
    }
}
exports.getMemberById = async(req,res)=>{
    const id = req.params.id;
    console.log("id",id)
    try {
        const selectedmember = await Member.findById(id);
        res.status(200).json({
            message:"Book found by id",
            data: selectedmember
        })
    } catch (error) {
        res.json({
            error:error
        })
}
}
exports.editMemberById = async(req,res)=>{
    const id = req.params.id;
    try{
        const member = await Member.findById(id);
        member.membership = req.body.membership
        member.author = req.body.author
        const savemember = member.save();
        res.status(200).json({
            message:"edit successful",
        })
    } catch(error){
        res.json({
           
            error:error
    
        })
    }

}
exports.deleteMemberById = async(req,res)=>{
    const id = req.params.id;
    try{
        const deletemember = await Member.findByIdAndDelete(id);
        res.json({
            message:"deleted successfully"
        })
    } catch(error){
        res.json({
            error:error
        })
    }
}
