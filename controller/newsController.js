import Betslips from "../model/newsModel";

export const createNews = async (req, res, next) => {
      const { title,category, date,
          image, description } = req.body;
  
      try {
          const News = new Betslips({
              title, category, date, image,
              description
          });
  
          await News.save();
  
          res.status(201).json({
              message: 'News create successfully!',
              News
          });
  
      } catch (error) {
          next(error);
      }
  }