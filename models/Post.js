const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    default:
      "http://nachogalbar.com/pagina/components/com_easyblog/themes/wireframe/images/placeholder-image.png",
  },
  price: {
    type: Number,
    required: true,
  },
  stock: {
    type: Number,
    default: 1,
  },
  inCartStock: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
