# Project Description:
***Video description: https://drive.google.com/file/d/12pp_b5ACKGjZsDvhyOW830cz4UFmdDcr/view?usp=drive_link***
* Technology stack: `Typescript`, `Scss`;
* Database: `My SQL`;
* Build tool and development server: `Vite`;
* Responsive design from `1200px` to `2560px`;
* Library and frameworks:
  - **React**;
  - **express**;
  - **mysql2**;
  - **nodemon**.
  - **axios**;
  - *autoprefixer*;
  - *formik*;
  - *slick-carousel*;
  - *and more...*
## Data movement structure in client:
![Client data flow](https://github.com/CyberBrainiac/Organick-shop_Sigma-Software/blob/master/client/src/assets/images/readmeImg/Client-data-flow.png)

## MySql database structure:
![Database structure](https://github.com/CyberBrainiac/Organick-shop_Sigma-Software/blob/master/client/src/assets/images/readmeImg/EER-DIagram.png)

## Running the project on a local machine:
***You can copy the code from my repository and use it for your projects***

To use the code you will need:
* **download a zip archive or clone the git repository to a local machine**;
  - of course unzip ;) 
* **navigate to root project directory**:
  - `Organick-shop_Sigma-Software`/***client*** and run `npm install`;
  - `Organick-shop_Sigma-Software`/***server*** and run `npm install`.
* **run 2 servers**:
  - client: `Organick-shop_Sigma-Software/client`, and use command `npm run dev`;
  - server: `Organick-shop_Sigma-Software/server`, and use command `npm run dev`.
* **run MySQL data base server**:
  - run MySQL Workbech > home icon > click on dolphin;
  - my sql connections (create conection if not exist);
  - left side panel > administration > server status. Need to be running;
  - file > open model > `Organick-shop_Sigma-Software/db/Sigma_camp.mwb`;
  - database tool > forward engineer > create DB from model;
  - write your server credentials to `.env` file in `Organick-shop_Sigma-Software/server`;
  - use data from `Organick-shop_Sigma-Software/db/dump;
  - if can`t use saved data, write manually data to products, category and product_category table;
  - if you write data manually, write any 4 ***products.idProduct*** IDs to `client/src/pages/home/common.blocks/offer/Offer.tsx` variable: `showingProductId`;
 

  
