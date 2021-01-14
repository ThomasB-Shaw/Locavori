const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */

//  Gets all makers on initial page load
router.get('/getall', (req, res) => {
  const queryText = 'SELECT * FROM "tbl_artisans";';
  pool.query(queryText)
    .then(result => {
        res.send(result.rows);
        
    }).catch(error => {
        res.sendStatus(500);
        console.log('error in GET makers', error);
    });
});
//get request that gets all from tbl_artisans on 
//a specific profile_id
router.get('/:id', (req, res) => {
  const queryText = `
  SELECT * FROM "tbl_artisans"
  WHERE "profile_id" = ${req.params.id}
  `;
  console.log(req.params.id);
  
// AND WHERE "id" = ${req.params.id} 


  pool.query(queryText).then((result) => {
    res.send(result.rows);
  }).catch((error) => {
    console.log(`Error on query ${error}`);
    res.sendStatus(500);
  });
});

// Gets makers based on parameters get in the client side filter
router.get('/', async (req, res) => {
  // Data from arrays get converted into strings, so split returns them to arrays
  let availabilityArray = req.query.availability.split(',');
  let deliveryArray = req.query.delivery.split(','); 
  let makerArray = req.query.makers.split(',');
  let locationArray = req.query.location.split(',');
  let dietArray = req.query.diet.split(',');
  // result array houses all returned makers from the database until the function is complete
  let resultArray = [];

// Handles filter for product types
// If no product types are selected, 'undefined' is send. If the product type checkbox is toggled an empty string is sent
// This function checks against that, then returns all from the database that are not an empty object.
  // An empty object is generated when users fill out the maker registration for and do not select anything for their product types
  if (req.query.fresh !== 'undefined' && req.query.fresh !== '') {
    const queryText = `SELECT * FROM tbl_artisans WHERE product_type_fresh != '{}' ;`;
    try {
      var result = await pool.query(queryText)
      resultArray.push(result.rows)
   } catch (error) {
     console.log('error in fresh filter', error)
     res.sendStatus(500);
     return
   }
  } else {console.log('No fresh option selected')};
  
  if (req.query.prepared !== 'undefined' && req.query.prepared !== '') {
    const queryText = `SELECT * FROM tbl_artisans WHERE product_type_food != '{}' ;`;
    try {
      var result = await pool.query(queryText)
      resultArray.push(result.rows)
   } catch (error) {
     console.log('error in prepared filter', error)
     res.sendStatus(500);
     return
   }
  } else {console.log('No prepared option selected')};
  
  if (req.query.beverages !== 'undefined' && req.query.beverages !== '') {
    const queryText = `SELECT * FROM tbl_artisans WHERE product_type_bev != '{}' ;`;
    try {
      var result = await pool.query(queryText)
      resultArray.push(result.rows)
   } catch (error) {
     console.log('error in beverages filter', error)
     res.sendStatus(500);
     return
   }
  } else {console.log('No beverage option selected')};

  // Delivery options are passed in as an array, and each index is checked based on what type of delivery is provided
    // Maker registration form sends over all lowercase 'yes' and 'no', which this function checks against
    for (let i = 0; i < deliveryArray.length; i++) {
      if (deliveryArray[i] === 'pick_up') {
        const queryText = `SELECT * FROM tbl_artisans WHERE pickup = 'yes';`;
        try {
          var result = await pool.query(queryText)
          resultArray.push(result.rows)
       } catch (error) {
         console.log('error in pickup filter', error)
         res.sendStatus(500);
         return
       }
      } else if (deliveryArray[i] === 'delivery') {
        const queryText = `SELECT * FROM tbl_artisans WHERE delivery = 'yes';`;
        try {
          var result = await pool.query(queryText)
          resultArray.push(result.rows)
       } catch (error) {
         console.log('error in delivery filter', error)
         res.sendStatus(500);
         return
       }
      } else if (deliveryArray[i] === 'shipping') {
        const queryText = `SELECT * FROM tbl_artisans WHERE shipping = 'yes';`;
        try {
          var result = await pool.query(queryText)
          resultArray.push(result.rows)
       } catch (error) {
         console.log('error in shipping filter', error)
         res.sendStatus(500);
         return
       }
      }
    }

    // Availability is sent as an array, that this function loops through to check for limited or year round
    const queryAvail = 'SELECT * FROM tbl_artisans WHERE product_avail = $1';
    for (let i = 0; i < availabilityArray.length; i++){
      try {
         var result = await pool.query(queryAvail, [availabilityArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        console.log('error in availability filter', error)
        res.sendStatus(500);
        return
      }
    }

    // Queries uses PostgreSQL's full text search, checking the queries against a series of vectors created during maker registration
    // Data is sent as an array that is looped through to get each ts_query
    const queryMaker = `SELECT * FROM tbl_artisans WHERE business_type_tokens @@ to_tsquery($1);`
    for (let i = 0; i < makerArray.length; i++){
      try {
         var result = await pool.query(queryMaker, [makerArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        console.log('error in maker type filter', error)
        res.sendStatus(500);
        return
      }
    }
    const queryLocation = `SELECT * FROM tbl_artisans WHERE where_sold_tokens @@ to_tsquery($1);`
    for (let i = 0; i < locationArray.length; i++){
      try {
         var result = await pool.query(queryLocation, [locationArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        console.log('error in location filter', error)
        res.sendStatus(500);
        return
      }
    }
    const queryDiet = `SELECT * FROM tbl_artisans WHERE prod_cat_tokens @@ to_tsquery($1);`
    for (let i = 0; i < dietArray.length; i++){
      try {
         var result = await pool.query(queryDiet, [dietArray[i]])
         resultArray.push(result.rows)
      } catch (error) {
        console.log('error in product category filter', error)
        res.sendStatus(500);
        return
      }
    }
    return res.send(resultArray);
  });

/**
 * PUT route template
 */

//  Makers are initialized in the user router, but their information is updated on click of "save application"
//  in the maker registration form through this PUT route
router.put('/', async (req, res) => {

  const makerInfo =[

    //  CONTACT INFO
    req.body.contact.legal_business_name,
    req.body.contact.public_business_name,
    req.body.contact.first_name,
    req.body.contact.last_name,
    req.body.contact.email,
    req.body.contact.phone,
    req.body.contact.alt_phone,
    req.body.contact.business_address,
    req.body.contact.business_suite_num,
    req.body.contact.business_city,
    req.body.contact.business_zip_code,
    req.body.business_state,
    req.body.contact.public_address,
    req.body.contact.public_suite_num,
    req.body.contact.public_city,
    req.body.contact.public_zip_code,
    req.body.public_state,
  
    // BUSINESS SPECIFICATIONS
    req.body.business_specs.website,
    req.body.business_specs.facebook,
    req.body.business_specs.instagram,
    req.body.business_specs.public_email,
    req.body.business_specs.license_id_state,
    req.body.business_license,
    req.body.business_type,
  
    // PRODUCT DISTRIBUTION
    req.body.product_distribution,
    req.body.delivery_type.pick_up,
    req.body.delivery_type.delivery,
    req.body.delivery_type.shipping,
    req.body.availability,
  
    // PRODUCT TYPES
    req.body.prepared_type,
    req.body.fresh_type,
    req.body.beverage_type,
    req.body.product_category,
    req.body.product_info.unique,
    req.body.product_info.awards,
    req.body.product_info.specialties,
  
    // FEATURED PRODUCTS
    req.body.featured_products.product_one_type,
    req.body.featured_products.product_one_image,
    req.body.featured_products.product_one_url,
    req.body.featured_products.product_two_type,
    req.body.featured_products.product_two_image,
    req.body.featured_products.product_two_url,
    req.body.featured_products.product_three_type,
    req.body.featured_products.product_three_image,
    req.body.featured_products.product_three_url,
  
    // STORY / ABOUT ME
    req.body.story_info.profile_image,
    req.body.story_info.story,
    req.body.story_info.give_back,
    req.body.story_info.anything_else,

    // USER ID
    req.user.id
   ]
  // *** SALES SHEET IS SPECIALTIES IN THE MEAN TIME ***
  // Creating vectors out of data sent over is not sanitized. It was not recognizing it as a string when sanitized.
  const makerQueryText = `UPDATE tbl_artisans SET 
    legal_name = $1, 
    business_name = $2, 
    first_name = $3, 
    last_name = $4, 
    email_contact = $5, 
    phone_one = $6, 
    phone_two = $7, 
    business_address = $8, 
    business_address_two = $9, 
    business_city = $10, 
    business_postalcode = $11, 
    business_state = $12, 
    public_address_one = $13, 
    public_address_two = $14, 
    public_city = $15, 
    public_zip = $16, 
    public_state = $17,
    website = $18,
    facebook = $19,
    instagram = $20,
    public_email = $21,
    st_license = $22,
    license = $23,
    business_type = $24,
    where_sold = $25,
    pickup = $26,
    delivery = $27,
    shipping = $28,
    product_avail = $29,
    product_type_food = $30,
    product_type_fresh = $31,
    product_type_bev = $32,
    product_type_cat = $33,
    product_unique = $34,
    awards = $35,
    sales_sheet = $36,
    product_type_one = $37,
    product_img_one = $38,
    product_url_one = $39,
    product_type_two = $40,
    product_img_two = $41,
    product_url_two = $42,
    product_type_three = $43,
    product_img_three = $44,
    product_url_three = $45,
    owner_img = $46,
    story = $47,
    give_back = $48,
    anything_else = $49,
    business_type_tokens = to_tsvector('${req.body.business_type.toString()}'),
    where_sold_tokens = to_tsvector('${req.body.product_distribution.toString()}'),
    prod_cat_tokens = to_tsvector('${req.body.product_category.toString()}')
    WHERE profile_id = $50;`
    
    pool.query(makerQueryText, makerInfo)
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            res.sendStatus(500);
            console.log('error in PUT maker info', error);
        });
    
});

router.put('/submit', async (req, res) => {

  const makerInfo =[

    //  CONTACT INFO
    req.body.contact.legal_business_name,
    req.body.contact.public_business_name,
    req.body.contact.first_name,
    req.body.contact.last_name,
    req.body.contact.email,
    req.body.contact.phone,
    req.body.contact.alt_phone,
    req.body.contact.business_address,
    req.body.contact.business_suite_num,
    req.body.contact.business_city,
    req.body.contact.business_zip_code,
    req.body.business_state,
    req.body.contact.public_address,
    req.body.contact.public_suite_num,
    req.body.contact.public_city,
    req.body.contact.public_zip_code,
    req.body.public_state,
  
    // BUSINESS SPECIFICATIONS
    req.body.business_specs.website,
    req.body.business_specs.facebook,
    req.body.business_specs.instagram,
    req.body.business_specs.public_email,
    req.body.business_specs.license_id_state,
    req.body.business_license,
    req.body.business_type,
  
    // PRODUCT DISTRIBUTION
    req.body.product_distribution,
    req.body.delivery_type.pick_up,
    req.body.delivery_type.delivery,
    req.body.delivery_type.shipping,
    req.body.availability,
  
    // PRODUCT TYPES
    req.body.prepared_type,
    req.body.fresh_type,
    req.body.beverage_type,
    req.body.product_category,
    req.body.product_info.unique,
    req.body.product_info.awards,
    req.body.product_info.specialties,
  
    // FEATURED PRODUCTS
    req.body.featured_products.product_one_type,
    req.body.featured_products.product_one_image,
    req.body.featured_products.product_one_url,
    req.body.featured_products.product_two_type,
    req.body.featured_products.product_two_image,
    req.body.featured_products.product_two_url,
    req.body.featured_products.product_three_type,
    req.body.featured_products.product_three_image,
    req.body.featured_products.product_three_url,
  
    // STORY / ABOUT ME
    req.body.story_info.profile_image,
    req.body.story_info.story,
    req.body.story_info.give_back,
    req.body.story_info.anything_else,

    // USER ID
    req.user.id
   ]
  // *** SALES SHEET IS SPECIALTIES IN THE MEAN TIME ***
  // Creating vectors out of data sent over is not sanitized. It was not recognizing it as a string when sanitized.
  const makerQueryText = `UPDATE tbl_artisans SET 
    legal_name = $1, 
    business_name = $2, 
    first_name = $3, 
    last_name = $4, 
    email_contact = $5, 
    phone_one = $6, 
    phone_two = $7, 
    business_address = $8, 
    business_address_two = $9, 
    business_city = $10, 
    business_postalcode = $11, 
    business_state = $12, 
    public_address_one = $13, 
    public_address_two = $14, 
    public_city = $15, 
    public_zip = $16, 
    public_state = $17,
    website = $18,
    facebook = $19,
    instagram = $20,
    public_email = $21,
    st_license = $22,
    license = $23,
    business_type = $24,
    where_sold = $25,
    pickup = $26,
    delivery = $27,
    shipping = $28,
    product_avail = $29,
    product_type_food = $30,
    product_type_fresh = $31,
    product_type_bev = $32,
    product_type_cat = $33,
    product_unique = $34,
    awards = $35,
    sales_sheet = $36,
    product_type_one = $37,
    product_img_one = $38,
    product_url_one = $39,
    product_type_two = $40,
    product_img_two = $41,
    product_url_two = $42,
    product_type_three = $43,
    product_img_three = $44,
    product_url_three = $45,
    owner_img = $46,
    story = $47,
    give_back = $48,
    anything_else = $49,
    pending_maker = TRUE,
    business_type_tokens = to_tsvector('${req.body.business_type.toString()}'),
    where_sold_tokens = to_tsvector('${req.body.product_distribution.toString()}'),
    prod_cat_tokens = to_tsvector('${req.body.product_category.toString()}')
    WHERE profile_id = $50;`
    
    pool.query(makerQueryText, makerInfo)
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            res.sendStatus(500);
            console.log('error in PUT maker info', error);
        });
    
});


  router.put('/:id', (req, res) => {
    const queryText = `
    UPDATE "tbl_artisans"
    SET "approved_maker" = FALSE
    where "profile_id" = $1;`;
    pool.query(queryText, [ req.params.id])
      .then((result) => {
        res.sendStatus(200)
      }).catch((error) => {
        console.log('error in put', error);
        res.sendStatus(500);
      })
  })

module.exports = router;