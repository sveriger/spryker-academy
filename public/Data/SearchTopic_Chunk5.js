define({"342":{i:0.000983973621730879,u:"../enablement/howtos/ht_add_new_shipment_method.html",a:"\nThis article describes the steps to add a new shipment method, without integrating with the shipment provider.\n In this tutorial we’ll consider the case when you need to add a new shipment method method the need to integrate it with the shipment providers system.\n \nWhat’s important for this ...",t:"HowTo - Add a New Shipment Method"},"343":{i:0.000983973621730879,u:"../enablement/howtos/ht_cart.html",a:"How to add product variants and product pictures to an existing cart Prerequisites: Before starting make sure you are familiar with the concept of Spryker  Super Attributes UI changes: Cart now supports changing the items in the cart by modifying their attributes. If we have a wrong T-Shirt size in ...",t:"HowTo - Cart Integration"},"344":{i:0.000983973621730879,u:"../enablement/howtos/ht_create_personalized_prices.html",a:"Personalized Prices This article describes the steps that you need to consider when you need to implement personalized prices for customer groups.\n \nOverview\n When implementing special prices that are according to the group the customer is part of, several steps need to be considered.\n Extend ...",t:"HowTo - Create Personalized Prices"},"345":{i:0.00129184482803445,u:"../enablement/howtos/ht_data_import.html",a:"The following article describes with a real life example for importing product images how to build your own DataImport for a specific type. The Database Schema You should start by looking at the database tables you want to fill with data. The image below shows the table relation for product images. ...",t:"HowTo - Add a New DataImport Type"},"346":{i:0.000983973621730879,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_implement_invoice_payment.html",a:"Invoice Payment This article describes the steps that you need to consider when you need to implement invoice payment method without integrating with a third party payment service provider.\n In this HowTo, we will add a new module called PaymentMethods.\n\n If this is you first time creating a new ...",t:"HowTo - Implement Invoice Payment"},"347":{i:0.00144166115429464,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, inside the Form/DataProvider/ folder:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Invoice Payment Front End"},"348":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_checkout.html",a:"The next step is to integrate the invoice payment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the invoice form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Invoice Payment into Checkout"},"349":{i:0.00144166115429464,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_be.html",a:"Checkout plugins\n To integrate the invoice payment method into the checkout, we need to provide implementations for these 2 plugins: CheckoutPreCondition PaymentSaveOrder Add the following 2 plugins in Zed, under the Communication/Plugin/Checkout/ folder of the new added module.\n\n ...",t:"HowTo - Implement Invoice Payment Back End"},"350":{i:0.00144166115429464,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_fe_be_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Invoice Payment - Shared Implementation"},"351":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_invoice_payment/ht_invoice_payment_test.html",a:"HowTo - Implement Invoice Payment - Test When you have completed the instructions on  front end ,  back end  and  shared  implementation, you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.",t:"HowTo - Implement Invoice Payment - Test"},"352":{i:0.000983973621730879,u:"../enablement/howtos/how_to_implement_prepayment/ht_implement_prepayment.html",a:"Prepayment\n This article describes the steps that you need to consider when you need to implement the prepayment method without integrating with a third party payment service provider.\n In this HowTo we will add a new module called PaymentMethods.\n\n If this is you first time creating a new module, ...",t:"HowTo - Implement Prepayment"},"353":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_fe.html",a:"Creating the form\n In Yves, we’ll start by building the form. Add the new module also in Yves and add a Form/ folder where we’ll place the implementation for building the form.\n\n First add the data provider, under Form/DataProvider:\n Click to expand the code sample \u003c?php\nnamespace ...",t:"HowTo - Implement Prepayment Front End"},"354":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_checkout.html",a:"The next step is to integrate prepayment into Checkout. In the PaymentMethods/Dependency/Injector from Yves add the CheckoutDependencyInjector, that will inject the prepayment form and handler into the Checkout module:\n Click to expand the code sample \u003c?php\n\nnamespace ...",t:"HowTo - Integrate Prepayment into Checkout"},"355":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_be.html",a:"To integrate the prepayment method into the checkout, we are required to provide implementations for these 2 plugins:\n\n CheckoutPreCondition  PaymentSaveOrder  Add the following 2 plugins in Zed, inside the Communication/Plugin/Checkout folder of the new added module.\n\nPrepaymentPreCheckPlugin:\n ...",t:"HowTo - Implement Prepayment Back End"},"356":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_shared.html",a:"As you can see, we need to identify the new payment type through some unique constants which we’re going to define under the Shared namespace, since they’re needed both by Yves and Zed.\n\n Create the PaymentMethodsConstants interface in the Shared namespace, where you’ll define these constants.\n\n ...",t:"HowTo - Implement Prepayment Shared"},"357":{i:0.00112337074635815,u:"../enablement/howtos/how_to_implement_prepayment/ht_prepayment_test.html",a:"HowTo - Test Prepayment Implementation Now you are able to test the payment method you just implemented.\n\nSubmit a new order from Yves. After that you can control the flow of the order in Zed UI.\n\n",t:"HowTo - Test Prepayment Implementation"},"358":{i:0.000983973621730879,u:"../enablement/howtos/ht_product_data_import_frontend.html",a:"Product Customization This article describes flow of the product data from importing it to the SQL database to showing it in the front-end view.\n Import products to the SQL database\n Products are imported in the SQL database through the  Importer module. The product details are parsed from CSV ...",t:"HowTo - Product Data from Import to Front-End View"},"359":{i:0.000983973621730879,u:"../enablement/howtos/ht_mvp_project_structuring.html",a:"In this HowTo we will provide practical tips and guidelines for structuring MVP Projects.  The purpose of these guidelines is to help with the project planning stage.  In general, good products are built on strong foundations, and a cost-effective projects are managed through clarity, communication ...",t:"HowTo - MVP Project Structuring"},"360":{i:0.00655916530696447,u:"../enablement/howtos/ht_replace_bundle_dependancies.html",a:"Spryker Dependencies This content describes how to identify module dependencies and replace a dependent module with another one. Each Spryker module might have several dependent modules that provide communication, utilities and added functionality. Usually adjustments are done via our plugin ...",t:"HowTo - Replace Spryker Module Dependancies"},"361":{i:0.00156195074202762,u:"../enablement/howtos/ht_setup_hello_world_queue.html",a:"This HowTo demonstrates a simple Hello, World queue use case. We will create a hello queue and send/receive our messages to/from this queue with Hello, World content.  For this purpose, we will be using our default queue engine RabbitMQ.\n\n Preparation\n Before you begin, check to see that the ...",t:"HowTo - Set Up a \"Hello World\" Queue"},"362":{i:0.00462029127537588,u:"../enablement/howtos/ht_setup_stores_mutli_store_projects.html",a:"For the case in which you must support multiple stores in your application, this can be achieved through configuration.\n\nYou can setup the stores together with their settings such as date format or currency and also you can setup the default store for your application.\n\n Configure Stores\n The stores ...",t:"HowTo - Setup Multi-Store Projects"},"363":{i:0.000983973621730879,u:"../enablement/howtos/ht_setup_stores_multiple_locals.html",a:"Multiple Locales This article describes the steps that you need to consider when you have to setup stores with multiple locales.\n Configure Locales for Store\n The stores configuration can be found in the config/Shared/stores.php file. You can find out more about store configuration  here .\n\n For ...",t:"HowTo - Setup Stores with Multiple Locales"},"364":{i:0.00159850878899743,u:"../enablement/migration_guides/migration_guides.html",a:"Migration Guides are simple instructions to guide you through the process of upgrading a module to a newer version.    Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top ...",t:"Migration Guides"},"365":{i:0.00101281440613652,u:"../enablement/migration_guides/mg_availability.html",a:"Upgrading from version 3.* to version 4.*\n All Availability ui was moved to AvailabilitGui module, mostly Communication or Persistence were changed. If you have overwritten any of moved classes from those layers please change base class namespace from Availability to AvailabilityGui root.\n\n ...",t:"Migration Guide - Availability"},"366":{i:0.00694919313107945,u:"../enablement/migration_guides/mg_calculation.html",a:"Upgrading from version 3.* to version 4.* To upgrade from 3* to 4*, composer update your calculator to version 4. Updating calculator stacks In the new version there are two new calculator stacks, getQuoteCalculatorPluginStack and getOrderCalculatorPluginStack. They are both defined in ...",t:"Migration Guide - Calculation"},"367":{i:0.00101281440613652,u:"../enablement/migration_guides/mg_catalog.html",a:"Upgrading from version 3.* to version 4.*\n Due to introducing the Suggestion Search feature, the Catalog module now requires Search \u003e=5.2.\n\n To Upgrade from 3.* to 4.*:\n\n Before upgrading to the new version, make sure that you do not use any deprecated code from version 3.*. Check the description of ...",t:"Migration Guide - Catalog"},"368":{i:0.00655916530696447,u:"../enablement/migration_guides/mg_category.html",a:"Upgrading from version 3.* to version 4.* Install new module Resolve deprecations Database migration Data migration 1. Install new module Install new module by adding the following into your composer.json \"spryker/category\": \"^4.0.0\" and running composer update. 2. Resolve deprecations \n    Before ...",t:"Migration Guide - Category"},"369":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_category_template_console.html",a:"\n\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Category\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Category Template Migration Console"},"370":{i:0.00655916530696447,u:"../enablement/migration_guides/mg_cms.html",a:"Upgrading from Version 3|4.* to Version 5.* CMS Version 5.0 has a new concept for showing pages in frontend, in previous CMS versions, after creating a CMS page and running the collectors, we were able to see the page in frontend, but now this has changed. After creating a cms page, another step  ...",t:"Migration Guide - CMS"},"371":{i:0.00171126812189489,u:"../enablement/migration_guides/mg_cms_block_category_connector.html",a:"Upgrading from Version 1.* to Version 2.* Due to introducing the CMS Block positioning and CMS Block templates for Category, the CMS Block Category Connector module now requires Category \u003e=4.0. The migration will contain the following steps: New module installation Deprecations migration Database ...",t:"Migration Guide - CMS Block Category Connector"},"372":{i:0.00171126812189489,u:"../enablement/migration_guides/mg_cms_block_category_connector_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlockCategoryConnector\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - CMS Block Category Connector Migration Console"},"373":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_cms_to_cms_block_console.html",a:"\n\u003c?php\n\n/**\n * Copyright © 2016-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\CmsBlock\\Communication\\Console;\n\nuse Orm\\Zed\\Cms\\Persistence\\SpyCmsPage;\nuse ...",t:"Migration Guide - CMS Block Migration Console"},"374":{i:0.00101281440613652,u:"../enablement/migration_guides/mg_collector.html",a:"Upgrading from version 3.* to version 4.* With version 4 of the Collector module, we fixed the collector:search:export and collector:search:update console commands to run for all available locales instead of just for the current one. This behavior is now consistent with the storage collector command ...",t:"Migration Guide - Collector"},"375":{i:0.00184068327749964,u:"../enablement/migration_guides/mg_customer.html",a:"  Case-insensitive schema with PostgreSQL To learn more about citex see:  https://www.postgresql.org/docs/9.1/static/citext.html . The citext module provides the case-insensitive character string type: citext. Essentially, it internally calls lower when comparing values. Otherwise, it behaves almost ...",t:"Migration Guide - Customer"},"376":{i:0.00101281440613652,u:"../enablement/migration_guides/mg_discount_calculator_connector.html",a:"Upgrading from version 4.* to version 5.* This module no longer has any calculator plugins, except the DiscountCalculatorPlugin. All other plugins were moved to separate repository in spryker/calculation-migration. To learn how to migrate to new structure see,  Upgrading from version 3.* to version ...",t:"Migration Guide - DiscountCalculatorConnector"},"377":{i:0.00101281440613652,u:"../enablement/migration_guides/mg_discount_sales_aggregator_connector.html",a:"Migration Guide - DiscountSalesAggregatorConnector Upgrading from version 2.* to version 3.*\n The tax plugins are using the version 3.* of the Tax module. You need to upgrade the  Tax  module.",t:"Migration Guide - DiscountSalesAggregatorConnector"},"378":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_environment_config.html",a:"The environment configuration was restructured to solve a couple of inconsistencies and dependencies within the configuration itself. To untangle some of configuration options it was necessary to introduce a few new configuration constants. Although the Spryker core should be fully backward ...",t:"Migration Guide - Environment Configuration"},"379":{i:0.00187371201101306,u:"../enablement/migration_guides/mg_oms.html",a:"Upgrading from version 6.* to version 7.* In version 7, OMS no longer uses SalesAggregator  to calculate totals, it is now done via the Calculator module. Therefore, there is no more dependency with SalesAggregator. The Spryker\\Zed\\Oms\\Business\\Mail\\MailHandler dependency to SalesAggregatorFacade ...",t:"Migration Guide - OMS"},"380":{i:0.00219519805135089,u:"../enablement/migration_guides/mg_payment.html",a:"Upgrading from version 3.* to version 4.*\n In the  Payment  module version 4 we added new payment tables to store order payment related information. To enable the new version: Composer update spryker/payment to new version\n  Run vendor/bin/console transfer:generate to generate new transfer objects\n ...",t:"Migration Guide - Payment"},"381":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product.html",a:"Upgrading from version 2.* to version 3.*\n The Product module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .\n\n Upgrading from version 3.* to version 4.*\n 1. Database migration\n vendor/bin/console propel:diff, also manual review is necessary for the generated ...",t:"Migration Guide - Product"},"382":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_bundle.html",a:"Upgrading from version 2.* to version 3.*\n\n In version 3 the calculator plugin changed together with new calculator version.\n\n The ProductBundlePriceAggregatorPlugin - moved to the SalesAggregator module, so you may need to change the namespace ...",t:"Migration Guide - Product Bundle"},"383":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_label.html",a:"Upgrading from version 1.* to version 2.* The following list describes the Backward Compatibility breaking changes in this version and how to upgrade. Product label rendering \n            We\u0027ve changed spyProductLabels twig function to work based on a list of product label IDs.\n            It\u0027s ...",t:"Migration Guide - Product Label"},"384":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_management.html",a:"Upgrading from Version 0.7.* to Version 0.8.*\n If you’re migrating the ProductManagement module from version 0.7.x to version 0.8.x, you need to follow the steps described below.\n\n ProductManagement module persistence layer was moved into the new ProductAttribute module. ORM Entities Changed The ...",t:"Migration Guide - ProductManagement"},"385":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_option.html",a:"Upgrading from version 4.* to version 5.* In version 5 Product Options were updated to work with the new calculator concept. Therefore, the SalesAggregator plugin was moved to the SalesAggregator module SubtotalWithProductOptionsAggregatorPlugin. The sales option database tables received new columns ...",t:"Migration Guide - Product Option"},"386":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_option_discount_connector.html",a:"Migration Guide - ProductOptionDiscountConnector Upgrading from version 2.* to version 3.* The tax plugins are using the version 3.* of the Tax module. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionDiscountConnector"},"387":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_option_exporter.html",a:"Migration Guide - ProductOptionExporter Upgrading from version 2.* to version 3.* The ProductOptionExporter module does not provide the tax functionality anymore. Upgrade  Migration Guide - Tax .",t:"Migration Guide - ProductOptionExporter"},"388":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_product_search.html",a:"Upgrading from version 3.* to version 4.* Requires version ^4.0.0 of Product and ^5.0.0 of Search bundles. ProductSearchFacade::activateProductSearch() and ProductSearchFacade::deactivateProductSearch() are not connected to searchableProduct anymore. ...",t:"Migration Guide - ProductSearch"},"389":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_refund.html",a:"Upgrading from version 4.* to version 5.* Version 4 of the Refund module no longer uses SalesAggregatorFacade , it was replaced with SalesFacade. The RefundCalculator business class must now replace RefundToSalesAggregatorInterface with the RefundToSalesInterface bridge. To learn more see,  ...",t:"Migration Guide - Refund"},"390":{i:0.00287888179979847,u:"../enablement/migration_guides/mg_sales.html",a:"Upgrading from Version 6.* to Version 7.* In Sales version 7, a new table for sales order item metadata (spy_sales_order_item_metadata) has been added. In order to migrate, the following table should be added: \nBEGIN;\n\nCREATE SEQUENCE \"spy_sales_order_item_metadata_pk_seq\";\n\nCREATE TABLE ...",t:"Migration Guide - Sales"},"391":{i:0.00246069042591667,u:"../enablement/migration_guides/mg_sales_aggregator.html",a:"Upgrading from version 4.* to version 5.* SalesAggregator version 4 is last version to be released for this module. Apart from future bug fixes, it will no longer be developed and Core will no longer use it to get order totals anymore. There are two steps to the two migration process. The first is ...",t:"Migration Guide - SalesAggregator"},"392":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_sales_aggregator_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\SalesAggregator\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - SalesAggregator Migration Console Command"},"393":{i:0.00377210108362674,u:"../enablement/migration_guides/mg_shipment_and_customer_migration_console.html",a:"\u003c?php\n/**\n * Copyright © 2017-present Spryker Systems GmbH. All rights reserved.\n * Use of this software requires acceptance of the Evaluation License Agreement. See LICENSE file.\n */\n\nnamespace Pyz\\Zed\\Sales\\Communication\\Console;\n\nuse Exception;\nuse ...",t:"Migration Guide - Sales Migration Console Command"},"394":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_search.html",a:"Upgrading from version 3.* to version 4.* With the version 4 of the Search module, the logic and configuration of how the results are sorted are changed. Previously there were two request parameters that controlled what field are we sorting by and what is the direction of the sort (e.g ...",t:"Migration Guide - Search"},"395":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_setup.html",a:"Upgrading from version 3.* to version 4.*\n\n With this update the behavior of the setup:install command slightly changes. Instead of removing directories where generated files are stored, these directories will be kept and emptied.\n   \nThe setup:install command utilizes two new commands for cleaning ...",t:"Migration Guide - Setup"},"396":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_shipment.html",a:"Upgrading from version 4.* to version 5.* In version 5, shipment lost the direct foreign key sales.fk_shipment_method to the sales_order table, it was replaced with the spy_sales_shipment table where all shipment information is stored. A new SalesOrderHydration plugin was added to populate ...",t:"Migration Guide - Shipment"},"397":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_stepengine.html",a:"Upgrading from version 2.* to version 3.*\n \nIf you\u0027re migrating the StepEngine bundle from version 2 to version 3, you need to follow the steps described below.\n\n In Version 3 the StepCollectionInterface::getPreviousStep() has a new second optional argument (AbstractTransfer $dataTransfer). If you ...",t:"Migration Guide - Step Engine"},"398":{i:0.00777952736905402,u:"../enablement/migration_guides/mg_tax.html",a:"Upgrading from version 4.* to version 5.* In version 5, tax calculation logic changed, tax amount for options, expenses and items are now calculated in the Tax module.  The plugins: ExpenseTaxCalculatorPlugin, ItemTaxCalculatorPlugin and TaxTotalsCalculatorPlugin were removed, and replaced with: ...",t:"Migration Guide - Tax"},"399":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_transfer.html",a:"Upgrading from version 2.* to version 3.* When upgrading to the new major version of the Transfer module, it is necessary to make sure that everywhere a $foo-\u003efromArray($bar-\u003etoArray()) statement is used the types are matching. From now on we are no longer silently ignoring when you try to set a ...",t:"Migration Guide - Transfer"},"400":{i:0.000983973621730879,u:"../enablement/migration_guides/mg_wishlist.html",a:"Upgrading from version 2.* to version 3.*\n If you’re migrating the Wishlist module from version 2 to version 3, you need to follow the steps described below.\n\n Version 3 of the Wishlist module introduced new schema, and old tables have to be deleted while new created.\n\n First you need to drop old ...",t:"Migration Guide - Wishlist"},"401":{i:0.00131154292070525,u:"../enablement/tutorials/tutorials.html",a:"Tutorials are instructions that describe an entire process from pointy to point including information about performing several tasks. We provide tutorials for the following: Onboarding - Tutorials that describe how to perform basic tasks Backend - Zed related tasks Frontend - Yves related tasks ...",t:"Tutorials"},"402":{i:0.000983973621730879,u:"../enablement/tutorials/backend/t_backend.html",a:"Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the one you are currently on. Navigate next ...",t:"Backend Tutorials"},"403":{i:0.0011512501712836,u:"../enablement/tutorials/backend/t_add_navigation_zed.html",a:"This tutorial describes how to make your new controller action accessible in the navigation bar. There are two locations where you can define the navigation config : In the global config/Zed/navigation.xml config file Within your module in src/Pyz/Zed/{BundleName}/Communication/navigation.xml ...",t:"Tutorial - Adding Navigation in Zed"},"404":{i:0.00302825079034458,u:"../enablement/tutorials/backend/t_add_new_bundle.html",a:"In this tutorial we will create a test module: HelloWorld module; the module’s functionality is to show a ‘Hello world!’ message to the user.\n\n When a new concept needs to be defined, a new module needs to be added on the project side to encapsulate that concept. The new module needs to follow the ...",t:"Tutorial - Adding a New module"},"405":{i:0.00147680034274205,u:"../enablement/tutorials/backend/t_calculator_plugin.html",a:"This tutorial explains how to add new calculation plugin to the calculator stack. Requirement : display the tax amount per item. Right now, you can get the tax amount from grandTotal. For this, you have to add a new calculator into the existing stack for the  Calculation module. First, there are ...",t:"Tutorial - Calculator Plugin"},"406":{i:0.000983973621730879,u:"../enablement/tutorials/backend/t_console_commands.html",a:"A console command is a PHP class that contains the implementation of a functionality that can get executed from the command line. Spryker offers a wrapper over Symfony’s Console component, that makes the implementation and configuration of a console command easier. Implementing a New Console Command ...",t:"Tutorial - Console Commands"},"407":{i:0.000983973621730879,u:"../enablement/tutorials/backend/t_create_table_view.html",a:"This tutorial explains how to retrieve data from the database and render it in a table. Prerequisites: You have created a new module ( Tutorial - Adding a New module ). Create a QueryContainer Create the QueryContainer class in the HelloWorld module: mkdir -p ...",t:"Tutorial - Creating a Table View"},"408":{i:0.000983973621730879,u:"../enablement/tutorials/backend/t_customer_import.html",a:"This tutorial describes the steps you need to follow in order to extend the Importer module functionality. In this example, we’ll import customer data; of course you can update the code in this tutorial to fit your need. Customer Data file In order to import customer data from a legacy system, the ...",t:"Tutorial - Customer Import"},"409":{i:0.000983973621730879,u:"../enablement/tutorials/backend/t_database_transactions.html",a:"To reduce boilerplate code and properly handle database transactions you can use Spryker\\Zed\\PropelOrm\\Business\\Transaction\\DatabaseTransacti onHandlerTrait.\n\n Usage\n To use database transactions in the DatabaseTransactionHandlingExample class: Click to expand the code sample \u003c?php\n\nuse ...",t:"Tutorial - Database Transaction Handling"},"410":{i:0.00182035636949448,u:"../enablement/tutorials/backend/t_extend_db_schema.html",a:"Fields can be added to the existing database tables, but they cannot be removed (removing fields from the tables could break the functionalities implemented in Spryker Core). As an example, we will add a description field to the spy_price_type table. The structure of this table is defined in the ...",t:"Tutorial - Extending the Database Schema"},});