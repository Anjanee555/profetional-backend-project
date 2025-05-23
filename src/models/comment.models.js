import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"; 


const commmentSchema = new Schema(
    {
        content: {
            type: String, //cloudinary url
            required: true
        },
        video: {
            type: Schema.Types.ObjectId,
            ref: "Video",
            required: true
        },
        owner: {
            type: Schema.Types.ObjectId,
            ref: "User",
        }

    },
    {
        timestamps: true
    }
)

commmentSchema.plugin(mongooseAggregatePaginate)

export const Comment = mongoose.model("Comment" , commmentSchema)