import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import { check } from 'meteor/check';

export const Grupos = new Mongo.Collection('grupos');

if(Meteor.isServer){
    Meteor.publish('grupos',()=>{
        return Grupos.find({
           
        });
    });

}
Meteor.methods({
    'grupos.crear':()=>{
        Grupos.insert({
            creador:this.userId,
            usuarios:[this.userId],
            invitados:[]
        });   
    },
    'grupos.invitar':(grupoId,invitadoId)=>{
        Grupos.update({ "_id" : grupoId }, { $push: { invitados: invitadoId } });
    },
    'grupos.entrar':(grupoId)=>{
       const invitadosAc= Grupos.findOne({"_id":grupoId}).invitados;

       //invitadosAc.includes(this.userId)?Grupos.update({ "_id" : grupoId }, { $push: { usuarios: this.userId } }): throw new Meteor.Error('not-authorized');
        if(invitadosAc.includes(this.userId)){
            Grupos.update({ "_id" : grupoId }, { $push: { usuarios: this.userId } });
        }
        else{
            throw new Meteor.Error('not-authorized');
        }

    },
    'grupos.salir':(grupoId)=>{
        //db.ejemplo.update(    { "_id" : ObjectId("5d9eada4349da0a208beedab") },    { $pull: { scores: 89 } } )
        Grupos.update(    { "_id" : grupoId },    { $pull: { usuarios: this.userId } } )
    },


});
