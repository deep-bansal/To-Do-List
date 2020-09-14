//adding schema
const Note = require('../models/note');

module.exports.home = function(req,res){
    Note.find({},function(err,notes){
        if(err){
            console.log('Error in Fetching the Details from db');
            return;
        }

        return res.render('home',{
            todo_list: notes

        });

    });
}



module.exports.addTask = function(req,res){
    Note.create({

        color:req.body.color,
        note: req.body.note,
    
        duedate: req.body.duedate,

        category:req.body.category.toUpperCase()

    } ,function(err,newNote){
        if(err){
            console.log("error in creating the note");
            return;
        }

        console.log('*****',newNote);
        return res.redirect('back');

    });

}

module.exports.deleteTask = function(req,res){

    let id = req.query.id;
    Note.findByIdAndDelete(id,function(err){
 
        if(err){
            console.log("error in deleting the object");
            return;
        }

        return res.redirect('back');
    });
} 
