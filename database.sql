--Maker/Artisan Table
CREATE TABLE "tbl_artisans" (
	"id" serial NOT NULL,
	"profile_id" integer NOT NULL,
	"legal_name" varchar(50),
	"business_name" varchar(150),
	"first_name" varchar(50),
	"last_name" varchar(50),
	"email_contact" varchar(100),
	"phone_one" varchar(20),
	"phone_two" varchar(20),
	"business_address" varchar(150),
	"business_address_two" varchar(150),
	"business_city" varchar(150),
	"business_state" varchar(150),
	"business_postalcode" varchar(150),
	"business_country" varchar(150) DEFAULT 'USA',
	"public_address_one" varchar(150),
	"public_address_two" varchar(150),
	"public_city" varchar(150),
	"public_state" varchar(150),
	"public_zip" varchar(150),
	"public_country" varchar(150) DEFAULT 'USA', 
	"latitude" numeric,
	"longitude" numeric,
	"website" varchar(150),
	"facebook" varchar(150),
	"instagram" varchar(150),
	"public_email" varchar(150),
	"other_contacts" varchar(150),
	"license" varchar(150),
	"st_license" varchar(150),
	"give_back" varchar(150),
	"business_type" varchar(1000),
	"business_type_other" varchar(150),
	"where_sold" varchar(1000),
	"where_sold_other" varchar(150),
	"pickup" varchar(150),
	"delivery" varchar(150),
	"shipping" varchar(150),
	"product_dist" varchar(1000),
	"story" varchar(2400),
	"product_avail" varchar(50),
	"product_type_food" varchar(1000),
	"product_type_food_other" varchar(50),
	"product_type_fresh" varchar(1000),
	"product_type_fresh_other" varchar(50),
	"product_type_bev" varchar(1000),
	"product_type_bev_other" varchar(50),
	"product_type_exp" varchar(100),
	"product_type_exp_other" varchar(100),
	"product_type_cat" varchar(1000),
	"product_type_cat_other" varchar(100),
	"product_type_one" varchar(100),
	"product_img_one" varchar(700),
	"product_url_one" varchar(1200),
	"product_type_two" varchar(100),
	"product_img_two" varchar(1200),
	"product_url_two" varchar(1200),
	"product_type_three" varchar(100),
	"product_img_three" varchar(1200),
	"product_url_three" varchar(1200),
	"product_unique" varchar(200),
	"owner_img" varchar(1200),
	"video" varchar(1200),
	"product_img" varchar(1200),
	"lifestyle_img" varchar(1200),
	"business_img" varchar(1200),
	"anything_else" varchar(1200),
	"awards" varchar(200),
	"sales_sheet" varchar(200),
	"logo" varchar(1200),
	"pending_maker" boolean default FALSE,
	"approved_maker" boolean default FALSE,
	"dateStampUTC" timestamp default current_timestamp,
	"modifiedUTC" time default current_timestamp,
	"distanceText" varchar(150),
	"distanceValue" varchar(150),
	"business_type_tokens" TSVECTOR,
	"where_sold_tokens" TSVECTOR,
	"prod_cat_tokens" TSVECTOR,
	CONSTRAINT "tbl_artisans_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


--Locavore table
CREATE TABLE "tbl_profile" (
	"id" serial NOT NULL,
	"first_name" varchar(50),
	"last_name" varchar(50),
	"birth_date" varchar (50),
	"email" varchar(50) NOT NULL UNIQUE,
	"password" varchar(1000) NOT NULL,
	"admin" boolean default FALSE,
	"date_stamp" timestamp default current_timestamp,
	CONSTRAINT "tbl_profile_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Junction table to store a locavore's favorite artisans
CREATE TABLE "tbl_favorites" (
	"id" serial NOT NULL,
	"profile_id" integer NOT NULL,
	"maker_id" integer NOT NULL,
	CONSTRAINT "tbl_favorites_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Junction table to relate types to an artisans
-- This is currently unused after we made changes to the code
CREATE TABLE "artisans_type" (
	"id" serial NOT NULL,
	"artisans_id" integer NOT NULL,
	"type_id" integer NOT NULL,
	CONSTRAINT "artisans_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- List of all types and filterable data points
-- This is currently unused after we made changes to the code
CREATE TABLE "tbl_type" (
	"id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	CONSTRAINT "tbl_type_pk" PRIMARY KEY ("id")
) WITH (
  OIDS=FALSE
);


-- Alters to bind tables with foreign keys
ALTER TABLE "tbl_artisans" ADD CONSTRAINT "tbl_artisans_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk0" FOREIGN KEY ("profile_id") REFERENCES "tbl_profile"("id");
ALTER TABLE "tbl_favorites" ADD CONSTRAINT "tbl_favorites_fk1" FOREIGN KEY ("maker_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk0" FOREIGN KEY ("artisans_id") REFERENCES "tbl_artisans"("id");
ALTER TABLE "artisans_type" ADD CONSTRAINT "artisans_type_fk1" FOREIGN KEY ("type_id") REFERENCES "tbl_type"("id");

-- All Types
-- This is currently unused after we made changes to the code
INSERT INTO "public"."tbl_type"("id","name")
VALUES
(1,E'Farmer-Grower'),
(2,E'Forager'),
(3,E'Maker'),
(4,E'Distiller'),
(5,E'Brewer'),
(6,E'Winemaker'),
(7,E'Cidery'),
(8,E'Roaster'),
(9,E'Apiary (Bees)'),
(10,E'Local Grocery Stores'),
(11,E'Co-ops'),
(12,E'Farmers Market or other Public Markets'),
(13,E'Online on Amazon'),
(14,E'Online at Company Websites'),
(15,E'Gift or Subscription Box Companies'),
(16,E'Retail Store, non-grocery'),
(17,E'Your place of business, farm or home'),
(18,E'Roadside Stand'),
(19,E'Local Delivery'),
(20,E'Curbside Pickup'),
(21,E'Shipping'),
(22,E'Pick Up'),
(23,E'Delivery'),
(24,E'Limited Availability'),
(25,E'Available All Year'),
(26,E'Jams, Jellies, Spreadables'),
(27,E'Pickles, Relish'),
(28,E'Vinegars'),
(29,E'Cookies'),
(30,E'Crackers'),
(31,E'Chips'),
(32,E'Syrups'),
(33,E'Honey'),
(34,E'Pancake Mix'),
(35,E'Baking Mix'),
(36,E'Cooking Sauce'),
(37,E'Hot Sauces'),
(38,E'Salsa'),
(39,E'Hard Candy / Sweets'),
(40,E'Popcorn'),
(41,E'Chocolate'),
(42,E'Soft or Chewy Candy / Sweets'),
(43,E'Nuts'),
(44,E'Other Snacks'),
(45,E'Dried Food'),
(46,E'Granola'),
(47,E'Soups (fresh or mix)'),
(48,E'Catsup'),
(49,E'Mustard'),
(50,E'Sweet Treat'),
(51,E'Rub'),
(52,E'Marinade'),
(53,E'Dried Vegetable'),
(54,E'Other Sauce'),
(55,E'Dried Meat or Jerky'),
(56,E'Preserved, Shelf-stable meat'),
(57,E'Bakery: fresh bread/pastries'),
(58,E'Beef'),
(59,E'Chicken'),
(60,E'Lamb'),
(61,E'Bison'),
(62,E'Pork'),
(63,E'Eggs'),
(64,E'Cheese'),
(65,E'Herbs'),
(66,E'Apples'),
(67,E'Blueberries'),
(68,E'Strawberries'),
(69,E'Fresh Vegetables'),
(70,E'Fresh Fruit'),
(71,E'Milk'),
(72,E'Cream'),
(73,E'Flowers'),
(74,E'Schrubs or Switchel'),
(75,E'Soda Pop (rootbeer, sassparilla, etc)'),
(76,E'Coffee'),
(77,E'Hot Cocoa or Hot Drink Mix'),
(78,E'Tea'),
(79,E'Health or Energy Shot'),
(80,E'Sweet Treat'),
(81,E'Cocktail or Bar Mixer'),
(82,E'Spirits'),
(83,E'Beer'),
(84,E'Hard Cider'),
(85,E'Wine'),
(86,E'Fresh Fruit'),
(87,E'Non-Alcoholic Beverage'),
(88,E'Dairy'),
(89,E'Snack'),
(90,E'Sweet Treat'),
(91,E'Salty / Savory Treat'),
(92,E'Healthy'),
(93,E'Gluten Free'),
(94,E'Vegan'),
(95,E'Dairy Free'),
(96,E'Organic'),
(97,E'Majority of your product ingredients are locally grown (grown within your state or neighboring state)'),
(98,E'Fair-Trade Sourced'),
(99,E'Farmer / Grower Made'),
(100,E'Small Batch'),
(101,E'Hand Made'),
(102,E'Non GMO'),
(103,E'No Trans Fats'),
(104,E'No High Fructose Corn Syrup or Similar'),
(105,E'Nitrate Free'),
(106,E'State or Regional Award Winning'),
(107,E'Keto / Low Carb'),
(108,E'Nut-Free'),
(109,E'Kosher'),
(110,E'Low Sodium'),
(111,E'Gift');

-- CrybabyCraig's Hot Sauce Insert
INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Craig',E'CryBaby',E'1994-09-12',E'CrybabyCraigs@gmail.com',E'ship',E'2020-12-17 10:49:42.28384');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(1,E'Craig',E'Crybaby Craigs',E'Craig',E'Kaiser',E'craig@crybabycraigs.gmail',E'502-202-2342',E'542-243-2938',E'1222 2nd Street Northeast','',E'Mineeapolis',E'MN',E'55413',E'USA',E'1222 2nd Street NorthEast','',E'Minneapolis',E'MN',E'55413',E'USA',45.00075,-93.26635,E'http://www.crybabycraigs.com/',E'https://www.facebook.com/CryBabyCraigs',E'''',E'craig@crybabycraigs.com',E'''',E'''',E'''',E'''',E'Condiments',E'''',E'''',E'''',E'''','','','',E'Cry Baby Craig''s Pickled Habanero and Garlic Hot Sauce has a loyal fan base that is spreading nationwide! It''s flavor is unique and features habanero peppers which are not cooked—they''re pickled so they retain their more delicate and fruity notes from the peppers. This creates a unique, bright and refreshing flavor that pairs with just about anything. Local Chef, Craig Kaiser, invented the recipe by accident when he was delivered too many peppers and pickled them to preserve them. He decided to make a hot sauce with them and culinary history was made! Craig recently moved his kitchen to Faribault so he could expand to meet the growing demand for his fantastic product. When he''s not in the kitchen, you''ll often find Craig helping out on charity causes with other local chefs.',E'YES',E'HOT SAUCE',E'''',E'{}',E'''',E'{}',E'''',E'''',E'''',E'''',E'''',E'Hot Sauce',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461266074787-IL30S1SS6F3NWHZDUN1R/ke17ZwdGBToddI8pDm48kHDdJ77rKG8qIHjY7NDr201Zw-zPPgdn4jUwVcJE1ZvWgCjmTad1QpYCGph9EV4QZUJFbgE-7XRK3dMEBRBhUpw3WfV_5oenwKY2Z8m_4RdXj7gVi-UEKdRXfIwKAK-hxDObU5caQUqF4ocJnIKDCFg/cbc1.jpg?format=1000w',E'http://www.crybabycraigs.com/',E'Hot Sauce (Gallon Jugs)',E'https://static1.squarespace.com/static/57110bf1b6aa608f4e1ed91c/5711349940261d0c19d2fa45/5dbc9a2c4c3d7f546463c763/1582148038370/?format=1500w',E'http://www.crybabycraigs.com/',E'Merchandise',E'http://www.crybabycraigs.com/',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1573242275849-AZ51899PDRLFDMDO3I5Q/ke17ZwdGBToddI8pDm48kMnzKw3j9nOOu7Rl-aUrxGNZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpxoqRKxRu1qPObmPqm6s-KGPc_ZtE_KPeF0BHqS59q14BRdZprvOxFdmhflMebD0FQ/cbc_starshirt1.jpg?format=750w',E'Sure',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461019795117-GFZQY2VTUJK321FWQ3RU/ke17ZwdGBToddI8pDm48kLuv8xSh8SgRgitmpnSOFPZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpz10js8IJ_mUMazbLsxxKMMzTTiChn4dZ14nYmZlUnpuREYFnapNv7TZRMEpgw8ZiY/crybaby_citypages.jpg',E'''',E'https://i.ytimg.com/vi/HlE5BlUjgNQ/mqdefault.jpg',E'https://images.squarespace-cdn.com/content/v1/57110bf1b6aa608f4e1ed91c/1461019795117-GFZQY2VTUJK321FWQ3RU/ke17ZwdGBToddI8pDm48kLuv8xSh8SgRgitmpnSOFPZZw-zPPgdn4jUwVcJE1ZvW56LRaUT1pClzWs44DErAMUJFbgE-7XRK3dMEBRBhUpz10js8IJ_mUMazbLsxxKMMzTTiChn4dZ14nYmZlUnpuREYFnapNv7TZRMEpgw8ZiY/crybaby_citypages.jpg',E'https://pbs.twimg.com/profile_images/496697943261331456/czKhsTPX_400x400.png',E'Nothanks!',E'Tons',E'https://stmedia.stimg.co/ctyp-022520-MN-Spice-Cry-Baby-Craigs-hotsauce.jpg?w=700',E'https://pbs.twimg.com/profile_images/496697943261331456/czKhsTPX_400x400.png',TRUE,FALSE,E'2020-12-17 11:02:35.6665',E'11:02:35.6665');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(1,1,14),
(2,1,16),
(3,1,19),
(4,1,37),
(5,1,11),
(6,1,97),
(7,1,102);


--Grandmas Gormet's Dummy Data Insert

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Grandmama',E'Gran',E'2020-12-16',E'grandmasDeal@thatthing.com',E'$2a$10$8BathSJ7mViwtBS3/xLqI.0xGfQokO9DV7yhbl.4my/UGF/pRyRc6',E'2020-12-17 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(2,E'Kimberly',E'Grandma''s Gourmets',E'Kimberly',E'Olson',E'grandmasss@gmail.com',E'324-203-1234',E'423-234-2049',E'2610 YH Hanson Ave.','',E'Albert Lea',E'MN',E'56007',E'USA',E'2610 YH Hanson Ave.','',E'Albert Lee',E'MN',E'56007',E'USA',43.68273,-93.34812,E'https://www.grandmasgourmets.com/',E'https://www.facebook.com/grandmaskim','',E'grandmas.gourmets@gmail.com','','','','',E'Baked Good','','','','','','','',E'Nothing beats Grans cookies, and bars',E'YES',E'{}','',E'YES','',E'{}','','','','','',E'Cookie',E'https://images-gmi-pmc.edge-generalmills.com/087d17eb-500e-4b26-abd1-4f9ffa96a2c6.jpg',E'https://www.grandmasgourmets.com/',E'Bars',E'https://chocolatecoveredkatie.com/wp-content/uploads/2018/06/Easy-Chocolate-Fudge-Recipe-2-Ingredients-500x375.jpg',E'https://www.grandmasgourmets.com/',E'Cake',E'https://www.pamperedchef.com/iceberg/com/recipe/1125065-lg.jpg',E'https://www.grandmasgourmets.com/',E'Yeah',E'https://frontiersinblog.files.wordpress.com/2020/04/frontiers-psychology-free-from-dance-alternative-interaction-grandchildren-grandparents.jpg?w=1024','',E'https://pbs.twimg.com/profile_images/713209322403016704/ijcXWNkq.jpg',E'https://frontiersinblog.files.wordpress.com/2020/04/frontiers-psychology-free-from-dance-alternative-interaction-grandchildren-grandparents.jpg?w=1024',E'https://media.urbanistnetwork.com/saigoneer/article-images/2018/08/Aug13/GrandmasRecipe_SGRb.jpg',E'Pretty Cool Yeah',E'Ive got like so many awards homes',E'https://pbs.twimg.com/profile_images/713209322403016704/ijcXWNkq.jpg',E'https://pbs.twimg.com/profile_images/713209322403016704/ijcXWNkq.jpg',TRUE,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(9,2,17),
(10,2,35),
(11,2,19),
(12,2,39),
(13,2,23),
(14,2,42),
(15,2,21),
(16,2,41);

-- Katie Sterns You Betcha Box Dummy Data Insert

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Katie',E'Sterns',E'2020-10-17',E'katie.sterns@gmail.com',E'locavore',E'2020-12-18 07:39:45.721249');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(3,E'Katie',E'Share Local Love LLC',E'Katie',E'Sterns',E'katie.sterns@gmail.com',E'651-295-1777',E'651-295-1777',E'1493 Scheffer Ave','',E'St. Paul',E'MN',E'55116',E'USA','','',E'Saint Paul',E'MN',E'55116',E'USA',44.92189,-93.16356,E'https://youbetchabox.com/',E'https://www.facebook.com/GourmetGiftBoxes',E'https://www.facebook.com/GourmetGiftBoxes',E'info@sharelocallove.com','','','','',E'GIFT','',E'ST. PAUL',E'Mid-West Wide','',E'Yes',E'Yes','',E'Creatively curated Minnesota Artisan Food Gift Boxes and Bags. Customization available to meet all needs and budgets. Select from over 200 small batch, high quality foods and related. We also partner with local breweries and distilleries too. Capture MN Spirit in a gift all will love! You Betcha!',E'YES',E'{}','',E'YES','',E'{}','','','',E'Gift','',E'Gift Deal!',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMsfiilvkNeHKxZ9HqxP8ZaVN02NYgJd6_Iw&usqp=CAU',E'https://youbetchabox.com/',E'HOT SAUCES',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRjqqWjsIqRoOPl5yhnHx9HHGKFRfmvclScA&usqp=CAU',E'https://youbetchabox.com/',E'THE BOX',E'https://cdn.minnesotamonthly.com/wp-content/uploads/sites/85/2019/08/DSC5365-e1566313049493.jpg',E'https://youbetchabox.com/',E'You Know it Bud',E'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/131405386_1552908348226584_5131309671268186515_o.jpg?_nc_cat=100&ccb=2&_nc_sid=2c4854&_nc_ohc=T0MNG5Mg8hQAX83CGs6&_nc_ht=scontent.ffcm1-1.fna&oh=e0aee95b7f8f6080c058572bfdd6778c&oe=6001F258','',E'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/130715891_1549009791949773_862914931259104278_o.jpg?_nc_cat=102&ccb=2&_nc_sid=2c4854&_nc_ohc=uo3MEBaZUNYAX8FPu2d&_nc_ht=scontent.ffcm1-2.fna&oh=52912b95ddc0e9a99255a0277478a969&oe=60030677',E'https://scontent.ffcm1-1.fna.fbcdn.net/v/t1.0-9/130045156_1546785478838871_4517929316616469920_o.jpg?_nc_cat=105&ccb=2&_nc_sid=2c4854&_nc_ohc=Yfok-79Sg2sAX9WuqON&_nc_ht=scontent.ffcm1-1.fna&oh=6828a4c5bbfe1ae23cbb3409ff7ad59e&oe=6000F81B',E'https://scontent.ffcm1-2.fna.fbcdn.net/v/t1.0-9/129721374_1545118509005568_8552604803700404172_o.jpg?_nc_cat=104&ccb=2&_nc_sid=2c4854&_nc_ohc=Px29hfJSx00AX8dGDaY&_nc_ht=scontent.ffcm1-2.fna&oh=fdd659ab265fdd8d6d5ac44b6ea74925&oe=6000923A',E'YOU BETCHA!',E'The Locavore''s Choice Award 32 Years Running',E'https://pbs.twimg.com/profile_images/713209322403016704/ijcXWNkq.jpg6',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIZ88WPzYBUqBsr7Si5jYuWU8kyQL5UO-P_w&usqp=CAU',TRUE,FALSE,E'2020-12-18 08:20:45.650381',E'08:20:45.650381');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(17,3,10),
(18,3,14),
(19,3,15),
(20,3,21),
(21,3,23),
(22,3,24),
(23,3,27),
(24,3,37),
(25,3,75),
(26,3,58),
(27,3,80),
(28,3,111);

-- Thomas's Hair Care

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Thomas',E'Brookshaw',E'1994-11-17',E'tbrookshaw133@hotmail.com',E'bald',E'2020-12-18 08:58:26.594336');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(4,E'Thomas',E'Deluxe Hair Co',E'Thomas ',E'Brookshaw',E'tbrookshaw13@gmail.com',E'715-410-7538','',E'2832 Emerson S Ave','',E'Mineapolis',E'MN',E'55408',E'USA',E'2832 Emerson S Ave','',E'Minneapolis',E'MN',E'55408',E'USA',44.943450,-93.2885553,E'https://thomasb-shaw.github.io/Personal-Website/',E'https://thomasb-shaw.github.io/Personal-Website/',E'https://thomasb-shaw.github.io/Personal-Website/',E'tbrookshaw13@gmail.com','','','',E'100% of Profits go to Sphinx Cat Hospitals',E'Cosmetics','',E'Minneapolis',E'World Wide',E'YES',E'YES',E'YES','',E'Just a simple man trying ot make his way through the universe',E'YES',E'{}','',E'{}',E'YES',E'YES',E'YES','','',E'Shampoo','',E'World Famous Shampoo',E'https://pics.drugstore.com/prodimg/185753/900.jpg','',E'Hair Conditioner',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpTr0Iexd8IC4QJ6FAngqtKXAn7OFJygNSg&usqp=CAU','','','','',E'Ye',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpTr0Iexd8IC4QJ6FAngqtKXAn7OFJygNSg&usqp=CAU','',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpTr0Iexd8IC4QJ6FAngqtKXAn7OFJygNSg&usqp=CAU',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpTr0Iexd8IC4QJ6FAngqtKXAn7OFJygNSg&usqp=CAU',E'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGpTr0Iexd8IC4QJ6FAngqtKXAn7OFJygNSg&usqp=CAU',E'Not actually shampoo, its nair',E'Best Head of Hair  for a 68 year old 2020','','',TRUE,FALSE,E'2020-12-18 08:55:35.935952',E'08:55:35.935952');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(29,4,3),
(30,4,4),
(31,4,10),
(32,4,13),
(33,4,54),
(34,4,93),
(35,4,111);

-- Oak Valley Creations

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Debbie',E'Fairbanks',E'',E'oakvalleycreations@gmail.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(5,E'Debbie',E'Oak Valley Creations',E'Debbie',E'Fairbanks',E'oakvalleycreations@gmail.com',E'',E'',E'','',E'Savage',E'MN',E'55378',E'USA',E'','',E'',E'',E'',E'USA',44.7647,-93.3591,E'http://www.oakvalleycreations.com/',E'','',E'','','','','',E'Maker','','farmers market, gift box company','','YES',E'YES',E'YES','',E'Before organic was a buzzword, it was a part of Debbie Fairbanks’ life. She has brought her passion and knowledge of organics to her products at Oak Valley Creations, establishing the company in 2012. Debbie offers a wide variety of products made in small batches using locally sources ingredients when ever possible. Her jellies, spices, and teas marry spice with fresh flavor. You''ll often find Debbie at local farmers markets and pop-up sales. Make sure to stop by her table and try out her full product line!',E'YES',E'YES','',E'{}','',E'{}','','','','','',E'Jellies, Jams, and Spreadables',E'http://www.oakvalleycreations.com/IMAG4928.jpg',E'',E'Seasonings, Spice blends',E'http://www.oakvalleycreations.com/flat_out_garlic.JPG',E'',E'Tea',E'http://www.oakvalleycreations.com/coffeesachetbox.JPG',E'',E'',E'http://www.oakvalleycreations.com/IMAG4928.jpg','',E'',E'',E'',E'',E'YES',E'',E'http://www.oakvalleycreations.com/White_Zinfandel.JPG',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(36,5,92),
(37,5,93),
(38,5,94),
(39,5,95),
(40,5,96),
(41,5,98),
(42,5,100),
(43,5,102),
(44,5,103),
(45,5,104),
(46,5,105),
(47,5,106),
(48,5,107),
(49,5,108),
(50,5,110);

--Kuzala Macaroons

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Christopher',E'Dark',E'',E'info@kuzalaorganics.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(6,E'Christopher',E'Kazala Macaroons',E'Christopher',E'Dark',E'info@kuzalaorganics.com',E'612-723-7960',E'',E'305 S Washington Ave',E'',E'Minneapolis',E'MN',E'55415',E'USA',E'',E'',E'',E'',E'',E'USA',44.979880,-93.264090,E'https://www.kuzalaorganics.com/',E'https://www.facebook.com/kuzalaorganics/',E'https://www.instagram.com/kuzalaorganics/?hl=en',E'info@kuzalaorganics.com',E'',E'',E'',E'',E'Organic Food',E'',E'Grocery Store''s, Coop''s, Amazon',E'',E'NO',E'NO',E'YES',E'',E'Organic, nourishing and delicious, Kuzala Macaroons come in 9 flavors. Developed by Christopher Dark to address his family''s dietary needs, every ingredient has been carefully selected for its nourishing, nutrient-dense qualities. Kuzala Macaroons not only taste great, they are loaded with fabulous fats and fiber from coconuts and nutrient and mineral rich maple syrup and pink Himalayan Salt. Kuzala Macaroons are gluten-free, vegan, raw and paleo friendly with sustainably sourced ingredients.',E'YES',E'YES',E'',E'{}',E'',E'{}',E'',E'',E'',E'Cookies',E'',E'Cookies',E'https://static.wixstatic.com/media/1a045a_e11358d1cbf04151889c78f8d45592a3.jpg/v1/fill/w_519,h_340,al_c,q_80,usm_0.66_1.00_0.01/1a045a_e11358d1cbf04151889c78f8d45592a3.webp',E'',E'',E'',E'',E'',E'',E'',E'',E'https://static.wixstatic.com/media/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.jpg/v1/fill/w_210,h_215,al_c,q_80,usm_0.66_1.00_0.01/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.webp',E'',E'',E'',E'https://static.wixstatic.com/media/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.jpg/v1/fill/w_210,h_215,al_c,q_80,usm_0.66_1.00_0.01/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.webp',E'',E'YES',E'',E'https://static.wixstatic.com/media/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.jpg/v1/fill/w_210,h_215,al_c,q_80,usm_0.66_1.00_0.01/1a045a_06ae82aa92bd4e1a8ca3bc475b4ac64d.webp',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(51,6,93),
(52,6,43),
(53,6,94),
(54,6,29),
(55,6,41),
(56,6,21),
(57,6,13),
(58,6,10),
(59,6,11),
(60,6,104),
(61,6,105),
(62,6,106),
(63,6,107),
(64,6,108),
(65,6,110);

--Ancient Indian Spices

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Deborah',E'McClaren',E'',E'www.ancientindianspices.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(7,E'Deborah',E'Ancient Indian Spices',E'Deborah',E'McClaren',E'Deborah@AncientIndianSpices.com',E'651-983-9880',E'',E'',E'',E'Minneapolis',E'MN',E'55415',E'USA',E'',E'',E'',E'',E'',E'USA',44.961227,-93.266560,E'www.ancientindianspices.com',E'https://www.facebook.com/AncientIndianSpices/',E'',E'Deborah@AncientIndianSpices.com',E'',E'',E'',E'',E'Maker',E'',E'Farmer''s Market, Gift Box, Local Grocery Stores',E'Online',E'YES',E'YES',E'YES',E'',E'Founder Deborah''s husband Rob, and their son Anil, were born in India. They have a passion to help Midwesterners discover Indian cuisine and the fine art of Indian cooking. Their incredible, organic spice mixes are handcrafted in small batches in St. Paul. Each spice is individually selected, pan roasted by hand to allow the natural fragrance and flavor to emerge, and finally ground and blended according to traditional recipes from India. In addition to making authentic Indian cooking accessible, Ancient Indian Spices gives back through their work to support small farmers and a sustainable food ecosystem.',E'YES',E'{}',E'',E'YES',E'',E'{}',E'',E'',E'',E'Spices',E'',E'Spices',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1343757362.jpg',E'https://ancientindianspices.com/CHAAT-MASALA-1-OZ-p180561011',E'Tea',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1362010885.jpg',E'https://ancientindianspices.com/White-Kumaon-tea-organic-1-oz-p122522437',E'Snacks',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1410859668.jpg',E'https://ancientindianspices.com/CHAI-COOOKIES-Comforting-and-Tasty-p195846731',E'YES',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1347066952.jpg',E'',E'',E'',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1347066952.jpg',E'',E'',E'',E'https://d2j6dbq0eux0bg.cloudfront.net/images/10519339/1347066952.jpg',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(66,7,8),
(67,7,10),
(68,7,11),
(69,7,12),
(70,7,15),
(71,7,19),
(72,7,20),
(73,7,21),
(74,7,22),
(75,7,23),
(76,7,78),
(77,7,89),
(78,7,100),
(79,7,111),
(80,7,15);



--K MAMA

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'KC',E'Kye',E'',E'office@kmamasauce.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(8,E'KC',E'K-Mama Korean Sauce',E'KC',E'Kye',E'office@kmamasauce.com',E'(612) 460-5156',E'',E'4301 Benjamin St NE',E'',E'Columbia Heights',E'MN',E'55421',E'USA',E'4301 Benjamin St NE',E'',E'Columbia Heights',E'MN',E'55421',E'USA',45.046960,-93.229150,E'https://kmamasauce.com/',E'https://www.facebook.com/KMamaSauce/',E'https://www.instagram.com/kmamasauce/?hl=en',E'office@kmamasauce.com',E'',E'',E'',E'Donates 30% of proceeds to charity',E'Sauce Maker',E'',E'Grocery Stores, Coops, Famer''s Market, Amazon',E'Online',E'NO',E'NO',E'YES',E'',E'Initially sweet with a rich and buttery middle and a spicy tang at the end, K-Mama Korean Hot Sauce adds an authentic, delicious kick to appetizers, salads, soups, and entrees of any style. "My mother made sauce that was a bit sweet, complex, spicy, and went on a variety of Korean dishes. Once I moved to Minnesota I felt a bit empty. I soon realized it was because I missed my mom''s home-cooked meals. That is how I came up with K-Mama Sauce." says Founder, K.C. Kye. After you try the delicious flavor K-Mama imparts, you will never want to go without a bottle in the fridge.',E'YES',E'YES',E'',E'{}',E'',E'{}',E'',E'',E'',E'Sauce',E'',E'Sauce',E'https://cdn.shopify.com/s/files/1/0224/2527/2400/products/20201209_135823_1024x1024@2x.jpg?v=1607545919',E'https://kmamasauce.com/collections/frontpage/products/ultimate-4-pack-6oz-gift-box',E'',E'',E'',E'',E'',E'',E'YES',E'https://cdn.shopify.com/s/files/1/0224/2527/2400/files/kmama-web-rez-16-of-23_720x.jpg?v=1557362564',E'',E'',E'',E'https://cdn.shopify.com/s/files/1/0224/2527/2400/files/kmama_logo_transparent_1000px_180x.png?v=1557441119',E'',E'',E'',E'https://cdn.shopify.com/s/files/1/0224/2527/2400/files/kmama_logo_transparent_1000px_180x.png?v=1557441119',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(81,8,8),
(82,8,10),
(83,8,11),
(84,8,12),
(85,8,15),
(86,8,19),
(87,8,20),
(88,8,21),
(89,8,22),
(90,8,23),
(91,8,78),
(92,8,89),
(93,8,100),
(94,8,111),
(95,8,15);

--Bull Brook Keep

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Sylvia',E'Toftness',E'',E'Sylvia@bullbrookkeep.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(9,E'Sylvia',E'Bull Brook Keep',E'Sylvia',E'Toftness',E'Sylvia@bullbrookkeep.com',E'(651) 238-8525',E'',E'765 50th Ave',E'',E'Clear Lake',E'WI',E'54005',E'USA',E'765 50th Ave',E'',E'Clear Lake',E'WI',E'54005',E'USA',45.283970,-92.319390,E'https://www.bullbrookkeep.com/',E'https://www.facebook.com/BullBrookKeep/',E'',E'Sylvia@bullbrookkeep.com',E'',E'',E'',E'Non-Profit Farm Education',E'Farmer-Grower',E'',E'Retail Store, Coops, Famer''s Market',E'',E'YES',E'YES',E'YES',E'',E'Our farm is about great taste, high nutrition and regenerating our soil.  We raise BueLingo cattle on grass - and only grass - year round on 72 hilly Wisconsin acres near Minneapolis/St. Paul metro. Why? Because our goals are contented cows that can deliver beef thats high Omega 3''s and CLA''s (healthful fatty acid that exists only in 100% grass-fed animals). We never feed grain, growth hormones, or sub-therapeutic antibiotics. Our beef is processed at nearby family-owned USDA-licensed facility. Purchase our beef and eat with a tiny carbon hoofprint (R). Our variety packages start at  just 30 lb. all the way up to a full cow. Each order contains roasts, steaks and ground beef. You can also order ground beef in quantity, and our nitrate- and nitrite-free summer sausage. That’s guilt-free eating.',E'YES',E'YES',E'',E'{}',E'',E'{}',E'',E'',E'',E'BEEF',E'',E'BEEF',E'http://www.bronxtobarn.com/wp-content/uploads/cropped-part-of-herd-and-treeV-1.jpg',E'https://www.bronxtobarn.com/',E'',E'',E'',E'',E'',E'',E'YES',E'https://i1.wp.com/www.bronxtobarn.com/wp-content/uploads/2014/04/20140329_145134_resized.jpg?resize=125%2C155&ssl=1',E'',E'',E'',E'',E'',E'',E'',E'',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(96,9,1),
(97,9,12),
(98,9,17),
(99,9,19),
(100,9,20),
(101,9,22),
(102,9,24),
(103,9,58),
(104,9,99);

--Ames Farm Honey

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Brian',E'Fredericksen',E'',E'webstore@amesfarm.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(10,E'Brian',E'Ames Farm Honey',E'Brian',E'Fredericksen',E'webstore@amesfarm.com',E'(952) 955-3348',E'',E'2425 County Road 127 ',E'',E'Delano',E'MN',E'55328',E'USA',E'2425 County Road 127',E'',E'Delano',E'MN',E'55328',E'USA',44.957900,-93.775170,E'https://www.amesfarm.com/',E'',E'https://www.instagram.com/amesfarm/?hl=en',E'webstore@amesfarm.com',E'',E'',E'',E'Pollenator Health',E'Apiary',E'',E'Grocery Store, CO-OP, Amazon',E'Online',E'NO',E'NO',E'YES',E'',E'Ames Farm is nationally recognized for producing single source, high-quality honey in Delano, Minnesota. Each jar of their honey has the location, hive number, and floral source printed on the label, making it unique and specific to a time and place in Minnesota- how can you get more local than that?! In addition to their amazing array of honeys, Ames Farm produces various balms, pollens and beeswax all while respecting the life cycle of the bees in their ethical beekeeping strategy.',E'YES',E'YES',E'',E'{}',E'',E'{}',E'',E'',E'',E'Honey',E'',E'Honey',E'https://cdn.shopify.com/s/files/1/0257/6071/products/3x3packs_600x.jpg?v=1543295193',E'https://www.amesfarm.com/collections/single-source-raw-honey/products/honey-variety-3-pack',E'Honey',E'https://cdn.shopify.com/s/files/1/0257/6071/products/alfalfa2oz_600x.jpg?v=1507240335',E'https://www.amesfarm.com/collections/single-source-raw-honey/products/alfalfa-honey?variant=31625958752317',E'Honey Comb',E'https://cdn.shopify.com/s/files/1/0257/6071/files/IMG_5450_RE_small.jpg?3194913002236121738',E'https://www.amesfarm.com/collections/fresh-honey-comb',E'YES',E'https://cdn.shopify.com/s/files/1/0257/6071/files/AmesFarm-logo-arc-WEB_280x@2x.png?v=1552591994',E'',E'',E'',E'',E'',E'',E'',E'https://cdn.shopify.com/s/files/1/0257/6071/files/AmesFarm-logo-arc-WEB_280x@2x.png?v=1552591994',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(105,10,9),
(106,10,10),
(107,10,11),
(108,10,13),
(109,10,14),
(110,10,21),
(111,10,25),
(112,10,33),
(113,10,89),
(114,10,96),
(115,10,102),
(116,10,104);

--J Carver Distillery

INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Bill',E'Miller',E'',E'INFO@JCARVERDISTILLERY.COM',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(11,E'Bill',E'J Carver Distillery',E'Bill',E'Miller',E'INFO@JCARVERDISTILLERY.COM',E'(952) 442-2433',E'',E'1320 Mill Ln ',E'',E'Waconia',E'MN',E'55387',E'USA',E'1320 Mill Ln',E'',E'Waconia',E'MN',E'55387',E'USA',44.836260,-93.804670,E'https://www.jcarverdistillery.com/',E'https://www.facebook.com/jcarverdistillery',E'https://www.instagram.com/jcarverdistillery/',E'INFO@JCARVERDISTILLERY.COM',E'',E'',E'',E'',E'Distillery',E'',E'Grocery Store, Retail Store',E'',E'NO',E'NO',E'NO',E'',E'Waconia''s J. Carver Distillery is a true Minnesota gem. Inspired by local spirit-producing cold climate fruits and grains of the Minnesota River Valley, they produce unique spirits including vodka, gin, whiskey, bourbon and brandy. A grain to glass distillery, they pride themselves in their collaboration with local farmers and barrel coopers in the development of their superior products.',E'YES',E'{}',E'',E'{}',E'',E'YES',E'',E'',E'',E'Spirits',E'',E'Bourbon',E'https://images.squarespace-cdn.com/content/v1/5251d48ae4b060bcf00af67c/1589745812744-H0I510T02R9Z3VIAJ8A2/ke17ZwdGBToddI8pDm48kBWjUE0aJvXiN-GDIB2nnId7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1URBOa1D7IMug3o3UbotWgmrlIupJq-FGrmxem1YLi4KI3WUfc_ZsVm9Mi1E6FasEnQ/Brickyard+Straight+Bourbon+Whiskey.png?format=500w',E'https://www.jcarverdistillery.com/bourbons',E'Gin',E'https://images.squarespace-cdn.com/content/v1/5251d48ae4b060bcf00af67c/1490459302018-ZV1CS2GE3J1MVE2ZIGQ7/ke17ZwdGBToddI8pDm48kO0ce8mCRz6IYlJHRGrhVr8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIMcfQzbemt9dmJGUavLvRjQv6LcaBGWceSn7mbagosO0zmYdGzpwT9zkV667Y-bOo/Premium+Gin+Borderless.png?format=500w',E'https://www.jcarverdistillery.com/gins',E'Vodka',E'https://images.squarespace-cdn.com/content/v1/5251d48ae4b060bcf00af67c/1490459481624-K9W1UGONGENEY3PVAPQO/ke17ZwdGBToddI8pDm48kO0ce8mCRz6IYlJHRGrhVr8UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8GRo6ASst2s6pLvNAu_PZdIMcfQzbemt9dmJGUavLvRjQv6LcaBGWceSn7mbagosO0zmYdGzpwT9zkV667Y-bOo/J+Carver+Premium+Vodka.jpeg?format=500w',E'https://www.jcarverdistillery.com/vodkas',E'YES',E'https://images.squarespace-cdn.com/content/v1/5251d48ae4b060bcf00af67c/1519920641930-N5HXXTMY3GY3K5ZELUVM/ke17ZwdGBToddI8pDm48kCHChmuivJZ1Va5ov3ZJeg17gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0ouw-8l5B_J38LMU7OZFvYcSGirBhY_3j1yQtntvGS73bypqQ-qjSV5umPUlGbQFAw/DSC_6221.JPG?format=1500w',E'',E'',E'',E'',E'',E'',E'',E'https://static1.squarespace.com/static/5251d48ae4b060bcf00af67c/t/5745a902f8baf3eb1ec2dca5/1608665145526/?format=1500w',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(117,11,9),
(118,11,10),
(119,11,11),
(120,11,13),
(121,11,14),
(122,11,21),
(123,11,25),
(124,11,33),
(125,11,89),
(126,11,96),
(127,11,102),
(128,11,104);

--Emmas Chip Co
INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Emma',E'Fisher',E'',E'emmaschipco@gmail.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(12,E'Emma Fisher',E'Emmas Chip Co',E'Emma',E'Fisher',E'emmaschipco@gmail.com',E'541-297-5643',E'',E'601 Ridgewood ave','',E'Minneapolis',E'MN',E'55403',E'USA',E'','',E'',E'',E'',E'USA',44.9632,-93.2867,E'https://emmasong34.github.io/emma-song-fisher/',E'https://www.facebook.com/songfisher','https://www.instagram.com/emsongfish/?hl=en',E'emmaschipco@gmail.com','','','','We donate 500 cases of chips to local schools each month',E'Maker','','farmers market','','',E'',E'YES','',E'Founded in the heart of Alaska, Emmas Chip Co brings the tastes of the last frontier to the lower 48.  We still make our chips the pioneer way: fried in a gold pan or baked in the midnight sun! Our chips are small batch and made with local ingredients. You can enjoy classic rustic Alaskan flavors such as Sourdough & Onion, Wild Blueberry, Balto BBQ, and Bering Sea Salt & Vinegar. Pair them with our King Salmon Dip or our Grizzly Bear Beans for a hearty snack!',E'YES',E'Yes','',E'{}','',E'{}','','','','','',E'Chips',E'https://cdn.pixabay.com/photo/2017/02/01/10/29/bag-2029481_960_720.png',
E'',E'Cooking Sauce',E'https://cdn.pixabay.com/photo/2020/03/06/14/33/can-4907201_960_720.jpg',
E'',E'Other Snacks ',E'https://cdn.pixabay.com/photo/2018/07/03/10/47/berries-3513547_960_720.jpg',
E'',E'Organic and locally sourced ingredients ',E'https://cdn.pixabay.com/photo/2016/05/26/19/37/chips-potatoes-1418192_1280.jpg',
'',E'',E'',E'',E'We offer a 10% student and teacher discount with the code PRIME',E'most unique chips north of the 49th parallel 5 years running',E'',E'https://cdn.pixabay.com/photo/2012/02/29/11/57/french-18726_960_720.jpg',True,FALSE,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(129,12,3),
(130,12,12),
(131,12,21),
(132,12,25),
(133,12,31),
(134,12,36),
(135,12,44),
(136,12,89),
(137,12,91),
(138,12,94),
(139,12,96),
(140,12,97),
(141,12,100),
(142,12,106);

--Red Lake Nation Foods
INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Red Lake',E'Nation',E'',E'customer.service@redlakenationfoods.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(13,E'Red Lake Nation',E'Red Lake Nation Foods',E'Red Lake',E'Nation',E'customer.service@redlakenationfoods.com',E'888-225-2108',E'',E'15550 Chippewa Ave','',E'Redby',E'MN',E'56670',E'USA',E'','',E'',E'',E'',E'USA',47.8788,-94.9084,E'https://redlakenationfoods.com/',
E'https://www.facebook.com/Red-Lake-Nation-Foods-102707789810531/',
'',E'customer.service@redlakenationfoods.com','','','','sales support members of the Chippewa Red Lake Nation Band',E'Farmer-grower, Maker, Forager','','grocery stores, co-ops, other company website','','no',E'no',E'YES','',E'The Red Lake Band of Chippewa, located in northern Minnesota, is the only Native American tribe in the US that grows and sells their own cultivated wild rice. Our mission is to offer unique, speciality natural foods and gift products which represent our cultural heritage, such as hand harvested wild rice, hand harvested wild fruit jellies, jam, and syrups. Sales benefit the 9600+ members of the Red Lake Nation',E'',E'syrups, grains, jams/jellies, baking mix','',E'{}','',E'coffee, tea','','','','','',E'Grains',E'https://redlakenationfoods.com/wp-lib/wp-content/uploads/2019/11/BrownWild_5lb-500x333.jpg',
E'https://redlakenationfoods.com/product/brown-and-wild-blend75-white-25-wild/',E'Syrup',E'https://redlakenationfoods.com/wp-lib/wp-content/uploads/2019/11/Maple_Syrup-500x750.jpg',
E'https://redlakenationfoods.com/product/maple-syrup/',E'Tea ',E'https://redlakenationfoods.com/wp-lib/wp-content/uploads/2019/11/00000IMG_00000_BURST20191127120801068_COVER-e1574885386717-500x500.jpg',
E'https://redlakenationfoods.com/product/green-tea/',E' ',E'https://redlakenationfoods.com/wp-lib/wp-content/uploads/2019/11/who-we-are.jpg',
'',E'',E'',E'',E'',E'',E'',E'https://redlakenationfoods.com/wp-lib/wp-content/uploads/2019/11/who-we-are.jpg',True,True,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(143,13,1),
(144,13,2),
(145,13,3),
(146,13,10),
(147,13,11),
(148,13,14),
(149,13,15),
(150,13,21),
(151,13,26),
(152,13,32),
(153,13,35),
(154,13,76),
(155,13,78),
(156,13,97);

--Wild Country Maple Syrup
INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Greg',E'Nichols',E'',E'info@wildcountrymaple.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(14,E'Wild Country Maple Products',E'Wild Country Maple Products',E'Greg',E'Nichols',E'info@wildcountrymaple.com',E'218-663-8010',E'',E'191 Barker Lake rd','',E'Lusten',E'MN',E'55612',E'USA',E'','',E'',E'',E'',E'USA',47.7035,-90.7166,E'https://www.wildcountrymaple.com/',
E'https://www.facebook.com/wildcountrymaple/',
'https://www.instagram.com/wildcountrymapleproducts/',
E'info@wildcountrymaple.com','','','','',E'Farmer-grower, Forager','','grocery stores, co-ops, other company website','','yes',E'no',E'YES','',E'Founders Michael and Carrie Baker fell in love with the North Shore and decided to buy a little maple farm in Lutsen, Minnesota called Wild Country. Tasting Wild Countrys 100% organic maple products will make you feel like youre standing over Lake Superior in the middle of Fall! Their syrups and caramels give a true taste of Minnesota found in nature and loved by all.',E'',E'syrups, soft candy, pancake mix','',E'{}','',E'{}','','','','','',E'Syrups',E'https://static.wixstatic.com/media/d6921d_26a7f140dad14b72bce2c16057041536~mv2.png/v1/fill/w_520,h_420,al_c,q_90,usm_0.66_1.00_0.01/d6921d_26a7f140dad14b72bce2c16057041536~mv2.webp',
E'https://www.wildcountrymaple.com/product-page/maple-syrup-in-traditional-glass',
E'Soft Candy',E'https://static.wixstatic.com/media/d6921d_6f60641c81f441f4b860638f513fbe13~mv2.jpg/v1/fill/w_520,h_420,al_c,q_85,usm_0.66_1.00_0.01/d6921d_6f60641c81f441f4b860638f513fbe13~mv2.webp',
E'https://www.wildcountrymaple.com/product-page/maple-candy-1lb',
E'Pancake Mix ',E'https://static.wixstatic.com/media/d6921d_89f229c2d98f48719efa2103d83767e3~mv2.jpg/v1/fill/w_520,h_420,al_c,q_85,usm_0.66_1.00_0.01/d6921d_89f229c2d98f48719efa2103d83767e3~mv2.webp',
 
E'https://www.wildcountrymaple.com/product-page/pancake-mix',E' ',E'https://static.wixstatic.com/media/866962_7a12a49fe93d4f3b88143789ef2e03c8~mv2_d_4500_3000_s_4_2.jpg/v1/crop/x_1168,y_237,w_3332,h_2616/fill/w_816,h_643,al_c,q_85,usm_0.66_1.00_0.01/866962_7a12a49fe93d4f3b88143789ef2e03c8~mv2_d_4500_3000_s_4_2.webp',
 
'',E'',E'',E'https://static.wixstatic.com/media/d6921d_368212e72c6c4d29b8b6256d944baa9f~mv2.jpg/v1/fill/w_577,h_433,al_c,q_80,usm_0.66_1.00_0.01/WildCountrySign.webp',
 
E'',E'',E'',E'https://static.wixstatic.com/media/d6921d_368212e72c6c4d29b8b6256d944baa9f~mv2.jpg/v1/fill/w_577,h_433,al_c,q_80,usm_0.66_1.00_0.01/WildCountrySign.webp',True,True,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(157,14,1),
(158,14,2),
(159,14,3),
(160,14,10),
(161,14,11),
(162,14,14),
(163,14,17),
(164,14,20),
(165,14,21),
(166,14,22),
(167,14,32),
(168,14,34),
(169,14,42),
(170,14,97),
(171,14,99);


-- Arbeiter Brewing Co
INSERT INTO "public"."tbl_profile"("first_name","last_name","birth_date","email","password","date_stamp")
VALUES
(E'Arbeiter',E'Brewing',E'',E'info@arbeiterbrewing.com',E'',E'2021-01-09 18:38:28.710877');
INSERT INTO "public"."tbl_artisans"("profile_id","legal_name","business_name","first_name","last_name","email_contact","phone_one","phone_two","business_address","business_address_two","business_city","business_state","business_postalcode","business_country","public_address_one","public_address_two","public_city","public_state","public_zip","public_country","latitude","longitude","website","facebook","instagram","public_email","other_contacts","license","st_license","give_back","business_type","business_type_other","where_sold","where_sold_other","pickup","delivery","shipping","product_dist","story","product_avail","product_type_food","product_type_food_other","product_type_fresh","product_type_fresh_other","product_type_bev","product_type_bev_other","product_type_exp","product_type_exp_other","product_type_cat","product_type_cat_other","product_type_one","product_img_one","product_url_one","product_type_two","product_img_two","product_url_two","product_type_three","product_img_three","product_url_three","product_unique","owner_img","video","product_img","lifestyle_img","business_img","anything_else","awards","sales_sheet","logo","pending_maker","approved_maker","dateStampUTC","modifiedUTC")
VALUES
(15,E'Arbeiter',E'Arbeiter Brewing Co',E'Arbeiter',E'Brewing',E'info@arbeiterbrewing.com',E'612-438-2437',E'',E'3038 Minnehaha ave','',E'Minneapolis',E'MN',E'55406',E'USA',E'','',E'',E'',E'',E'USA',44.9470,-93.2338,E'https://arbeiterbrewing.com/',
E'https://www.facebook.com/arbeiterbrewing',
'https://www.instagram.com/arbeiterbrewing/',
E'info@arbeiterbrewing.com','','','','',E'Brewer','','retail store non grocery, business, curbside pickup','','YES',E'no',E'no','',E'Brewing American ales & lagers with a dose of German influence as an homage to The North and beyond.',E'',E'{}','',E'{}','',E'Beer','','','','','',E'Beer',E'https://arbeiterbrewing.com/wp-content/uploads/2020/12/Arbeiter_Can_Yellow-1024x1024.png',
E'https://arbeiterbrewing.com/beer/',
E'Growlers',E'https://arbeiterbrewing.com/wp-content/uploads/2020/06/badWeatherCollab-1.jpg',
E'https://arbeiterbrewing.com/beer/',
E'Collaboration Brews ',E'https://arbeiterbrewing.com/wp-content/uploads/2020/06/blackStack.jpg',
 
E'https://arbeiterbrewing.com/beer/',E' ',E'https://arbeiterbrewing.com/wp-content/uploads/2020/06/juno.jpg',
 
'',E'',E'',E'https://arbeiterbrewing.com/wp-content/uploads/2020/12/front-door-1024x1024.jpg',
 
E'',E'',E'',E'https://arbeiterbrewing.com/wp-content/themes/arbeiter-theme/assets/vectors/wide-logo.svg',True,True,E'2020-12-17 18:54:12.860655',E'18:54:12.860655');

-- Types is currently unused after we made changes to the code
INSERT INTO "public"."artisans_type"("id","artisans_id","type_id")
VALUES
(172,15,5),
(173,15,16),
(174,15,17),
(175,15,20),
(176,15,22),
(177,15,25),
(178,15,83);


-- Example Get Query below using join tables
-- GETS ALL ARTISANS AND ALL OF THEIR CATEGORIES
SELECT * FROM "tbl_artisans"
JOIN "artisans_type" ON "tbl_artisans"."id" = "artisans_type"."artisans_id"
JOIN "tbl_type" ON "tbl_type"."id" = "artisans_type"."type_id";


