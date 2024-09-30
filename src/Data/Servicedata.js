import img2 from '.././components/images/img2.jpg'
import expone from '.././components/images/expone.jpg'
import exptwo from '.././components/images/exptwo.jpg'
import galleryone from '.././components/images/galleryone.jpg'
import Serviceimgone from '.././components/images/Serviceimgone.jpg' 
import Serviceimgtwo from '.././components/images/Serviceimgtwo.jpg'
import mainimgone from '.././components/images/mainimgone.jpeg'
import mainimgtwo from '.././components/images/mainimgtwo.jpeg'
import Serviceimgthree from '.././components/images/Serviceimgthree.jpg'
const Servicedata =[
    {
        "name":"Marriage Catering Service",
        "price":"555",
        "slugs":"/marriage",
        "desc":"We provide Catering for Marriage",
        "image":[expone,img2,mainimgtwo,exptwo,galleryone,Serviceimgone,Serviceimgtwo],
        
    },
    {
        "name":"/birthday",
        "price":"555",
        "slugs":"/birthday",
        "desc":"We provide Catering for Birthday",
        "image":[exptwo,galleryone]
    },
    {
        "name":"/ceremonies",
        "price":"555",
        "slugs":"/ceremonies",
        "desc":"We provide Catering for Ceromonies",
        "image":[Serviceimgone,Serviceimgtwo]
    },
    {
        "name":"/events",
        "price":"555",
        "slugs":"/events",
        "desc":"We provide Catering for Events",
        "image":[Serviceimgthree,mainimgone]
    }
]
export default Servicedata