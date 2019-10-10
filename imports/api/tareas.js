import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';
import { Tasks } from './tasks';

export const Tareas = new Mongo.Collection('tareas');

if(Meteor.isServer){
    Meteor.publish('tareas',()=>{
        return Tareas.find({
            $or: [
                { groupID: { $ne: true } },
                { owners: this.userId },
              ],
        });
    });

}

Meteor.methods({
    'tareas.insert':(description,groupId,dueDate)=>{

        const gruposUsuario=Meteor.users.findOne(this.userId).grupos;
     //db.users.findOne({"_id":ObjectId("5d9eada4349da0a208beedab")).grupos

        let esta=false;
        for (grupo in gruposUsuario){
            grupo===groupId?esta=true:"";
        };
       if( !esta )
        {
            throw new Meteor.Error('not-authorized')
        };
        //el 
        var date = new Date(dueDate);
        date.setDate(date.getDate() - 2);
            /*2 DIAS ANTES DEL DUE DATE SE SUELTAN.DEBERIA DEPENDER DEL TIPO DE PROYRECTO */
    
        Tareas.insert({
            description,
            fechaCreacion:new Date(),
            currentOwners:[],
            creator: this.userId,
            porcentageDone: 0,
            hasTraspased: false,
            delayed: false,
            grupoId: groupId,
            dueDate: new Date ("2019-10-10T04:03:48.616Z"),
            expirationDate: new Date ("2019-10-10T04:03:48.616Z"),         
        });
    },
    'tareas.tomar':(taskId)=>{

        Tareas.update({ "_id" : ObjectId("5d9eada4349da0a208beedab") }, { $push: { currentOwners: this.userId } });
        Tareas.update({ "_id" : ObjectId("5d9eada4349da0a208beedab") }, { $set:{delayed: false } });

    },


});