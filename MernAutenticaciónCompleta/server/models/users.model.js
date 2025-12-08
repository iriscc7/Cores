import { mongoose } from "mongoose";
import bcrypt  from "bcrypt"

const userSchema = mongoose.Schema(
    {
        firtsName:{
            type:String,
            required:[true,"The name is mandatory"],
            minlength:[3,"The name should have at least 3 characters"]
        },
        lastName:{
            type:String,
            required:[true,"The lastname is mandatory"],
            minlength:[3,"The lastname should have at least 3 characters"]
        },
        email:{
            type:String,
            required:[true,"The email is mandatory"],
            unique:true
        },
        password:{
            type:String,
            required:[true,"The password is mandatory"],
            minlength:[8,"The lastname should have at least 8 characters"]
        }
    },{timestamps:true}
)

userSchema.virtual('passwordconfir').get(
    function(){
        return this._passwordconfir
    }
).set(function(value){
    this._passwordconfir = value
});

userSchema.pre('validate',function(next){
    if(this.password !== this.passwordconfir){
        this.invalidate('passwordconfir','The passwords do not match')
    }
    next();
})

userSchema.pre('save',function(next){
    bcrypt.hash(this.password,10).then((ecnryptedPass)=>{
        this.password = ecnryptedPass;
        next();
    })
})

const User = mongoose.model('users',userSchema)

export {User,userSchema}