define({"140":{i:0.00114988308113578,u:"../developing_with_spryker/module_guide/products/product/product_options.html",a:"Product options allow to configure a product. For example if you want to choose the frame for a piece of artwork. Product Options allows you to define an option type (frame, paper, color e.g.) and every option type can have between 1 and n options values. Furthermore a price can be attached to an ...",t:"Product Options"},"141":{i:0.00114988308113578,u:"../developing_with_spryker/module_guide/products/product/product_domain_model.html",a:"The following domain model shows abstract product and concrete product. One abstract product has at least one up to n different products. A product belongs exactly to one abstract product. Both abstract and concrete product can have 0 to n product attributes. Remember a product attribute table ...",t:"Product Domain Model"},"142":{i:0.00114988308113578,u:"../developing_with_spryker/module_guide/products/product/product_lifecycle.html",a:"The touch tables are able create the snapshot of what’s currently loaded into the Yves data storages ( both key-value and search data storages) If a product was added into the Zed database after the last export, then there’s no corresponding entry in the touch table for that product. Once it’s ...",t:"Product Lifecycle"},"143":{i:0.001176513512946,u:"../developing_with_spryker/module_guide/products/product_new.html",a:"Overview \n            New products feature extends product module by two date attributes: \"new from\" and \"new to\" dates. Between the\n            defined date range the product is considered new. New products on the frontend appear with a label on it that\n            displays this information for ...",t:"New Products"},"144":{i:0.00136270716015839,u:"../developing_with_spryker/module_guide/products/product_bundle.html",a:"Product bundles are two or more existing products combined into a new type of product for the sole purpose to be displayed as one product in the shop frontend and to be sold together. Typically the products are concrete products, because both need to be potential order items. The new (bundled) ...",t:"Product-Bundle Module"},"145":{i:0.00113246764833725,u:"../developing_with_spryker/module_guide/products/product_group/product_group.html",a:"The Product Groups feature allows to group together multiple abstract products for various reasons. One of the most common use cases of this feature is to group same products with different colors together to make user’s browsing more convenient. Once products are grouped together, on catalog and ...",t:"Product Group"},"146":{i:0.00143758564698732,u:"../developing_with_spryker/module_guide/products/product_group/product_group_feature_integration.html",a:"Prerequisites To prepare your project to work with Product groups: Require the Product Group bundles in your composer.json by running composer require spryker/product-group spryker/product-group-collector. Install the new database tables. By running vendor/bin/console propel:diff. Propel should ...",t:"Feature Integration - Product Group"},"147":{i:0.00143758564698732,u:"../developing_with_spryker/module_guide/products/product_group/product_group_under_the_hood.html",a:"Database schema The ProductGroup module provides spy_product_group table that stores product groups. Product group entities have only the id_product_group field, because we don’t need to display or refer to any groups in any way. The only necessary details for a group are the abstract products that ...",t:"Under The Hood"},"148":{i:0.0063745299838835,u:"../developing_with_spryker/module_guide/products/product_label/product_label.html",a:"Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature Integration Prerequisites To prepare your project for using Product ...",t:"Product Label"},"149":{i:0.0063745299838835,u:"../developing_with_spryker/module_guide/products/product_label/product_label_1_0.html",a:"The latest version of this module can be found here  Product Label Overview Product labels are used to show additional information for abstract products in shop front-ends. They can be managed through a dedicated Zed user interface and rendered in various ways in project implementations. Feature ...",t:"Product Label 1.0"},"150":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/products/product_option.html",a:"This module manages the product options. Each product can have one or more product option groups attached. A product option can have a price linked to it, which changes the total price of the product. Option Group The group name in the option group is a glossary key. The value and corresponding ...",t:"Product Option"},"151":{i:0.00139674283598972,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation.html",a:"E-Commerce shops maximize value for their shop visitors by helping them explore products that are related to the one they are currently interested in. These relations appear in different ways such as displaying similar products, upgrades of products (Product-relations), or simply products that fit ...",t:"Product Relation"},"152":{i:0.00115415725234509,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_types.html",a:"In Spryker currently there are two types of relations:\n\n Related-products, related products displayed in the product detail page for the currently selected abstract product.\n Up-selling, related products displayed in the cart overview page, related products are from a list of abstract product ids or ...",t:"Product Relation Types"},"153":{i:0.00213519653371877,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_yves_datatastore.html",a:"The product relation collector exports relations to the Yves data store.  This collector is located in the ProductRelationCollector module.\n \nInclude this module in your composer.json file and update. Then add the plugin ProductRelationCollectorPlugin from this module to ...",t:"Yves Datastore Collector - Product Relation"},"154":{i:0.00115415725234509,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_integration.html",a:"Register a new collector plugin. How to is in  Yves Datastore Collector - Product Relation .\n Then register a new twig service plugin  \\Spryker\\Yves\\ProductRelation\\Plugin\\ProductRelationTwigServiceProvider inside the \\Pyz\\Yves\\Application\\YvesBootstrap::registerServiceProviders plugin stack.  This ...",t:"Product Relation Integration"},"155":{i:0.00115415725234509,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_db_entity_relation.html",a:"spy_product_relation.fk_product_abstract - is the product for which relation is build.  spy_product_relation.is_active - if relation is not active it will still be exported, but not visible.  spy_product_relation_product_abstract.fk_product_abstract - is the related product.  ...",t:"Database Entity Relation Schema - Product"},"156":{i:0.00115415725234509,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_building_your_own.html",a:"To create a new relation type, modify the Yves and Zed applications:\n\n Zed:\n\n Create new relation type in \\Spryker\\Shared\\ProductRelation\\ProductRelationTypes as a new constant type for example TYPE_RELATION_NEW also include to getAvailableRelationTypes returned array. After this you can able select ...",t:"Building Your Own Product Relation Type"},"157":{i:0.00115415725234509,u:"../developing_with_spryker/module_guide/products/product_relation/product_relation_query_builder.html",a:"Query build in Zed allows to select and bulid a dynamic related product query. The query ships with pre-set rules:\n\n sku - filter by abstract product sku.\n name - filter by abstract product name. The locale is Zed’s default locale. If a product matches in that locale it will be related in both ...",t:"Query Builder - Product Relation"},"158":{i:0.00166311110234554,u:"../developing_with_spryker/module_guide/products/product_set.html",a:"Overview The Product Sets feature allows you to put together multiple products for the purpose of emphasizing that the set of products can be bought together. Product Sets usually have their own separate list and detail pages in the shop frontend where customers can add containing products to the ...",t:"Product Set"},"159":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/products/category.html",a:"Product Category The mechanisms that make finding a product easier are the most important features in a commerce business. If it\u0027s difficult for a customer to find the product that he needs, then he won\u0027t buy it even if that product is available in the shop. One of the features is organizing the ...",t:"Category"},"160":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/products/price.html",a:"A price can be attached to an abstract product but also to a concrete product. The price is stored as an integer, in the smallest unit of the currency (e.g. for Euro that would be cents). Each price is assigned to a price type ( e.g. gross price, net price ) and for a price type there can be one to ...",t:"Price"},"161":{i:0.00594733372488932,u:"../developing_with_spryker/module_guide/queue/queue.html",a:"BETA version\n This module is still in development and for the moment is only available as beta version. Concepts Sender\t -  a program that sends messages.\n Receiver\t- a program that waits to receive messages.\n Message - \ta string or binary data  passed from Sender to Receiver.\n Message Box\t- Similar ...",t:"Queue"},"162":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_adapter.html",a:"Default Queue Adapter Spryker includes a RabbitMQ adapter package in  spryker/rabbit-mq , if you have already installed the spryker demoshop on your machine, this package will be automatically downloaded for you.\n",t:"Default Queue Adapter"},"163":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_benefits.html",a:"The following is a list of the Queus System’s benefits:\n \nAsynchronous: Message processing can be offloaded to different times to prevent bottlenecks and run when necessary.\n Decoupling: The queue provides separate layers for data and processing\n Scalability: Adding more processes for receiving and ...",t:"Queue Benefits"},"164":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_engine.html",a:"The Spryker virtual machine is shipped with a ready to use RabbitMQ engine inside.\n\n To access the management UI:\n\n Go to http://zed.de.demoshop.local:15672/ (Replace demoshop with your project name if you customized it)\n Enter the default credentials: user: admin Password: mate20mg\n Click Login\n ...",t:"Default Queue Engine"},"165":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_job_config.html",a:"You can also find the Worker configuration in jobs.php as part of the Demopshop and adjust the worker command to run every minute.\n\n To adjust the worker command to run every minute:\n \u003c?php\n\n$jobs[] = [\n    \u0027name\u0027 =\u003e \u0027queue-worker-start\u0027,\n    \u0027command\u0027 =\u003e \u0027$PHP_BIN vendor/bin/console ...",t:"Queue Job Configuration"},"166":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_msg_processor.html",a:"Plugins are used to enable developers to have more focus on message processing. This is achieved by handling the queue implementation as a background process, allowing developers to focus on messages and their processing logic.\n\n Example:\n\n \u003c?php\nnamespace ...",t:"Queue Message Processor Plugin"},"167":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_task.html",a:"The Queue module provides a specific command for listening to the queues, fetching messages and triggering registered processors, by running this command you will see what messages are going to be consumed and passed to the plugins.\n\n The command syntax is as follows:\n\n ./vendor/bin/console ...",t:"Queue Task"},"168":{i:0.00592411492680299,u:"../developing_with_spryker/module_guide/queue/queue_workers.html",a:"Queue Worker is another useful command that sends the Task to a background process and provides parallel processing. By adjusting the Worker config we can run tasks with different time slot and a different amount of processes.\n Command syntax:\n\n ./vendor/bin/console queue:worker:start -vvv\n",t:"Queue Workers"},"169":{i:0.00525153026877246,u:"../developing_with_spryker/module_guide/tax/tax.html",a:"The Tax module is responsible for handling tax rates that can apply for products, product options or shipment. Overview The tax sets can have different tax rates for each country defined in your shop. You can see in the diagram below how these entities are modeled in the database. A tax set is ...",t:"Tax"},"170":{i:0.00425090527535569,u:"../developing_with_spryker/module_guide/tax/tax_2_0.html",a:"The latest version of this module can be found here  Tax Spryker allows to define different tax sets that include one to many different tax rates. Tax set - tax rate association A tax set has associated at least one tax rate. For products on which there aren’t applied any taxes : associate the ...",t:"Tax Version 2.0"},"171":{i:0.00280605793382039,u:"../developing_with_spryker/module_guide/url/url.html",a:" The URL module handles dynamic URLs for entities that appear on the front-end (Yves). At the moment, Spryker core provides URL handling for products, CMS pages, categories and URL redirects. The URLs are stored in one database table and each is unique. The database structure for storing URLs looks ...",t:"URL "},"172":{i:0.00214886953509707,u:"../developing_with_spryker/module_guide/url/url_handling_new_entity.html",a:"The following information describes how to handle URLs for other types of entities that Spryker core provides. Prerequisites Before you begin, make sure the target entity is already in your database (the one to you would like to assign URLs to). In the examples below we\u0027ll call this entity ...",t:"Handling New Types of Entity URLs"},"173":{i:0.00214886953509707,u:"../developing_with_spryker/module_guide/url/url_redirects.html",a:"A URL redirect is a special entity that consists of a source URL (which is provided by the spy_url database table), a target URL and an HTTP status code (stored in spy_url_redirect database table). Redirects are exported to the key-value storage with collectors and are matched with StorageRouter ...",t:"URL Redirects"},"174":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/utilities/about_utilities.html",a:"The following modules are utilities.   Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes you the page preceding the ...",t:"About Utilities"},"175":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/utilities/currency.html",a:"\nThe Currency module provides an easy way to retrieve information about a currency given an ISO code.\n The methods in the CurrencyFacade will always return an instance of the CurrencyTransfer. You can get any currency by it’s ISO code or the current configured currency.\n\n Usage\n CurrencyFacade ...",t:"Currency"},"176":{i:0.00149818148357709,u:"../developing_with_spryker/module_guide/utilities/importer.html",a:"Importer module is dedicated for loading initial data in the database, when installing the application. The imported data includes: glossaries CMS pages and blocks products categories stocks prices taxes shipments Please note that Importer module is built on project level and it’s customized for ...",t:"Importer"},"177":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/utilities/logger.html",a:"Spryker contains a  PSR-3  compatible logger which can be customized to any needs. You can use the logger everywhere in the system, as in the example below: \u003c?php \n\nuse Spryker\\Shared\\Log\\LoggerTrait;\n \nclass MyClass\n{\n\n    use LoggerTrait;\n \n    public function myFunction()\n    {\n        // This ...",t:"Logger"},"178":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/utilities/money.html",a:"Money Handling monetary values can be a problem and is often quite hard. The Money module makes it easier to work with monetary values. Spryker handles all monetary values as integer and provides conversions from decimal values to cent values and vice versa. The key feature of this module is to ...",t:"Money"},"179":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/yves_components/about_yves_components.html",a:"The following modules are used to establish Yves functionality. Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the search (above).  You can also use navigation buttons on the top right corner of page:  Navigate previous button takes ...",t:"About Yves Components"},"180":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation.html",a:"Overview\n The Navigation module manages multiple navigation menus that can be displayed on the frontend (Yves). Every navigation section can contain its own nested structure of navigation nodes. Navigation nodes have types that help define what kind of link they represent.\n\n The following node types ...",t:"Navigation"},"181":{i:0.00137257521649048,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation_feature_integration.html",a:"Prerequisites\n To prepare your project to work with Navigation:\n\n Require the Navigation bundles in your composer.json.\n Install the new database tables. By running vendor/bin/console propel:diff.Propel will generate a migration file with the changes.\n Apply the database changes: run ...",t:"Feature Integration - Navigation"},"182":{i:0.00137257521649048,u:"../developing_with_spryker/module_guide/yves_components/navigation/navigation_under_the_hood.html",a:"Database schema\n The Navigation module provides the spy_navigation table that stores navigation menus. They have a name field which is only used for backend display and they also have a key field used to reference the navigation menus from yves.\n \nEvery navigation entity contains some nodes stored ...",t:"Under the Hood - Navigation"},"183":{i:0.00212048525133453,u:"../developing_with_spryker/module_guide/yves_components/search/search.html",a:"One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant the search results are, the search feature is a crucial aspect for ...",t:"Search"},"184":{i:0.00276970709320714,u:"../developing_with_spryker/module_guide/yves_components/search/search_collector_config.html",a:"In this section you’ll learn how to easily map collected data from the database to the default Elasticsearch page mapping type. If you need information about how collectors work in general, you can read more about it on the  Collector  documentation page. First, you need to implement ...",t:"Search Collector Configuration"},"185":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_elasticsearch.html",a:"Elasticsearch is a NoSQL data store which allows us to predefine the structure of the data we’ll be storing in it. Since the data structure we use is static, we would like to define it in advance. The definitions of the indexes and mapping types are written in JSON format, just as you’ll find it in ...",t:"Configure Elasticsearch"},"186":{i:0.00274800701766148,u:"../developing_with_spryker/module_guide/yves_components/search/search_configure_features.html",a:"In this section you’ll learn how to configure faceted navigation, filters, pagination and sorting, so all the important search features that are provided by the Search module. This configuration is only relevant if you enable the three query expanders and result formatters mentioned above. ...",t:"Configure Search Features"},"187":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/yves_components/search/search_filter.html",a:"In Zed there’s a section (Search and Filters -\u003e Filter Preferences) for managing the product attributes that you’d like to filter by in the shop. There are several filter types that the framework supports at the moment: single-select: filter for one value at a time (e.g. radio group), multi-select: ...",t:"Filter Preferences - Search"},"188":{i:0.00213342027078402,u:"../developing_with_spryker/module_guide/yves_components/search/search_preferences.html",a:"In Zed there’s a section (Search and Filters -\u003e Search Preferences) for managing searchable product attributes. To be able to search after a product in the shop that has a specific attribute (e.g. color, size, etc.), you can click on “Add attribute to search” to create new, or “Edit” if it already ...",t:"Search Preferences"},"189":{i:0.00345483393010475,u:"../developing_with_spryker/module_guide/yves_components/search/search_query.html",a:"Once we have all necessary data in Elasticsearch, it’s time to display them in Yves. In order to achieve this, we first need to query Elasticsearch, which will return raw data for us that we need to  Process Query Result  to display it in our templates. In the SearchClient you can find the search() ...",t:"Search Query"},"190":{i:0.00144892006849844,u:"../developing_with_spryker/module_guide/yves_components/search/search_4_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the specific products. Depending on how easy it is to find the products the customer is searching for and how relevant the ...",t:"Search 4.0"},"191":{i:0.00144892006849844,u:"../developing_with_spryker/module_guide/yves_components/search/search_3_0.html",a:"The latest version of this module can be found in  Search  section One of the most important features in an e-commerce application is to give the customer the ability to find the products that he needs. Depending on how easy it is to find the products the customer is searching for and how relevant ...",t:"Search 3.0"},"192":{i:0.00113246764833725,u:"../developing_with_spryker/module_guide/zed_api/zed_api.html",a:"The Spryker Framework offers a flexible REST API for Zed. It maps basic REST functionality to the persistence layer of the Spryker backend.\n\n By default, the API accepts and returns JSON as format. But it can be extended to work with any format. As for JSON, the API specification is close to JSON ...",t:"Zed API (BETA)"},"193":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_resources.html",a:"Each module can have a “{module}Api” module(e.g. CustomerApi for Customer). Such an API module exposes CRUD facade methods (find, get, add, update, remove) that can be mapped to a URL via REST resource/action resolution.\n\n The main Api module contains a dispatcher that delegates to those API module ...",t:"Zed API Resources"},"194":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_config.html",a:"First of all we need to decide on the resources being exposed. Those will be mapped inside the ApiDependencyProvider:\n\n \u003c?php\nuse Spryker\\Zed\\CustomerApi\\Communication\\Plugin\\Api\\CustomerApiResourcePlugin;\nuse Spryker\\Zed\\ProductApi\\Communication\\Plugin\\Api\\ProductApiResourcePlugin;\n\n    /**\n     * ...",t:"Zed API Configuration"},"195":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_processor_stack.html",a:"Request and pre processing\n We now need to decide further on the URL format. Should this be extension driven, which is easier to browse, or HTTP header driven, for example? What kind of URL query string transformation do we need, what kind of header parsing is required?\n\n In order to keep this ...",t:"Processor Stack - Zed API"},"196":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_crud_function.html",a:"Filtering\n For find action we return a paginated collection that can be limited and customized based on query string input or headers. So using the provided FilterPreProcessors one can enable filtering (conditions), sorting (and multi-sorting) and pagination.\n\n Condition filtering\n For the filtering ...",t:"CRUD Functionality - Zed API"},"197":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_additional_function.html",a:"Meta information\n Links as part of the meta information will be part of the response on the same level as the data: {\n    \"data\": ...,\n    \"links\": [\n        \"self\" =\u003e ...                         \n        ...\n    ],\n    ...\n}\n “self” URIs are included, for example for adding an item.\n\n",t:"Additional Functionality - Zed API"},"198":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"199":{i:0.000956284189902271,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"200":{i:0.00139674283598972,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on collectors. Every DataFeed module has an API to get a query. With the ...",t:"Data Feed Modules"},"201":{i:0.0063745299838835,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"202":{i:0.000979502987988603,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"203":{i:0.00136507916683092,u:"../developing_with_spryker/3rd-party_integration/3rd_party_integration.html",a:"In this section you will find information about our 3rd party integration solutions. HowTos are simple instructions to guide you through the process of performing a single task.  Academy Navigation To navigate through content, click on an option from the right-hand table of contents or use the ...",t:"3rd-Party Integration"},"204":{i:0.000983379054586012,u:"../developing_with_spryker/3rd-party_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner mindlab. Partner Information Nnetmind Documentation Seamless integration of Spryker \u0026 netmind - quickly and easily implemented Customers of Spryker can easily connect to netmind and access a comprehensive netmind e-commerce reporting. ...",t:"netmind-Spryker Module"},"205":{i:0.000956284189902271,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay.html",a:"BETA version\n This module is still in development. RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods. RatePAY bears the full risk and takes over the complete processing.\n\n RatePAY provides four methods of payment:\n\n Invoice - ...",t:"Payment Integration - RatePAY"},"206":{i:0.000956284189902271,u:"../developing_with_spryker/3rd-party_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},});