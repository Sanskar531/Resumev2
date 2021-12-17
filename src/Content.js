import firstPic from "./Components/assets/pic1.jpeg";
import secondPic from "./Components/assets/pic2.svg";
import projectPic1 from "./Components/assets/project_1.png";
import projectPic2 from "./Components/assets/project_2.png";
import projectPic3 from "./Components/assets/project_3.png";

const constants = {
  homepageInfo: {
    content: [
      {
        description:
          "Hello! I am Sanskar. I am an aspiring web developer/software developer in general who loves coding. Along with this I also love to engage and learn more about AI and  deep/machine learning algorithm field.",
        image: firstPic,
      },
      {
        description:
          "My love for this field is rooted in the fact that almost every idea you could have can be coded. Given enough time and required knowledge, one can achieve anything.",
        image: secondPic,
      },
    ],
  },
  ProjectInfo: {
    content: [
      {
        title: "Brain Tumor Segmentation using U-net",
        description: [
          "Utilized TensorFlow’s deep learning library to develop a U-net architecture as described in its white paper.",
          "Used the U-net model to segment different brain tumor images by employing tumor masks as leverage for penalizing and training.",
          "Dealt with class imbalance present in the tumor masks and made use of different loss functions to fix the mentioned problem.",
          "Trained the model efficiently up till 55 epochs with weighted cross entropy without overfitting it.",
          "Coded and employed dice coefficient, sensitivity, and specificity as the main metrics to evaluate the model.",
        ],
        image: projectPic1,
        github:
          "https://github.com/Sanskar531/Brain-Tumor-Segmentation-using-Unet",
      },
      {
        title: "Country-Finder App",
        description: [
          "Applied React JavaScript Framework as the Front-end to build a web-application which consumes JSON data from a public API called “restcountries.eu”.",
          "Employed asynchronous code to fetch data from the given rest API.",
          "Utilized their RESTful API to extract data from the server and displayed it based on the user’s search query.",
          "Formulated a search function to find and search countries with the added feature of selecting a specific country to view its information.",
        ],
        github: "https://github.com/Sanskar531/Country-Finder",
        image: projectPic3,
        website: "https://sanskar531.github.io/Country-Finder/",
      },
      {
        title: "Multiclass Logistic Regression Model ",
        description: [
          "Programmed and applied gradient descent as an optimization algorithm to find parameters that yield the lowest cost/loss.",
          "Utilized Regularization in the cost function to mitigate the risks of overfitting.",
          "Using the concept of one vs all, created multiple logistic regressors and brought them all together in one multi-class regressor and used the prediction which had the highest confidence to determine the target class.",
        ],
        github: "https://github.com/Sanskar531/Multi-Class-Logistic-Regression",
        image: projectPic2,
      },
    ],
  },
};

console.log(secondPic);

export default constants;
