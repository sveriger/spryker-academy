define({"206":{i:0.000863585452966574,u:"../developing_with_spryker/module_guide/zed_api/zed_api_project_implementation.html",a:"For the API and the API bundles to get activated we need to configure our own service provider stack in the Zed ApplicationDependencyProvider class:\n\n \u003c?php\n    /**\n     * @param \\Spryker\\Zed\\Kernel\\Container $container\n     *\n     * @return \\Silex\\ServiceProviderInterface[]\n     */\n    protected ...",t:"Project Implementation - Zed API"},"207":{i:0.000863585452966574,u:"../developing_with_spryker/module_guide/zed_api/zed_api_appendix.html",a:"API Documentation\n We will soon provide an extensive documentation on the API resource URIs available and a tool to parse those to a standard.\n\n Logging\n By default all incoming requests and outgoing responses will be logged as “info” level.\n\n Security recommendations\n Secure the API with a token ...",t:"Appendix - Zed API"},"208":{i:0.00125265869511428,u:"../developing_with_spryker/module_guide/data_feed.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com DataFeed modules help to query abstract products, categories, prices, availability data and related information for exporting or processing. The data Feed is not dependent on ...",t:"Data Feed Modules"},"209":{i:0.00575692764105747,u:"../developing_with_spryker/module_guide/flysystem.html",a:"The Flysystem moduleintegrates Spryker with the  thephpleague/flysystem  vendor package. It handles operations, flysystem adapter configuration and provides a FlysystemFilesystemBuilderPluginInterface, where the build() method is expected to return a concrete implementation of the ...",t:"Flysystem"},"210":{i:0.000885173072015091,u:"../developing_with_spryker/module_guide/user_rights_management.html",a:"User and rights management is a general term that describes the security functionality for controlling user access to perform various roles throughout the system. In the Spryker Commerce OS user and rights management is implemented in the following three bundles: ACL - ACL stands for Access Control ...",t:"User and Rights Management"},"211":{i:0.0012337760903533,u:"../developing_with_spryker/industry_partner_integration/partner_integration.html",a:"In this section you will find information about our Industry Partner Integration solutions. Please visit our Partners Registry for a complete list of our partners  https://spryker.com/find-a-partner/ Academy Navigation To navigate through content, click on an option from the right-hand table of ...",t:"Industry Partner Integration"},"212":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/factfinder/integration_search_factfinder.html",a:"Search Integration - Fact Finder (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Search Integration - Fact Finder (BETA)"},"213":{i:0.00093656644950604,u:"../developing_with_spryker/industry_partner_integration/partner_analytics_netmind.html",a:"This integration is built and supported by our industry partner Mindlab Solutions. Partner Information Netmind Documentation Spryker customers can easily connect to Netmind and access comprehensive Netmind e-commerce reporting. On request, this can be individually adapted to customer-specific ...",t:"Netmind-Spryker Module"},"214":{i:0.00093656644950604,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss.html",a:"Partner Information The purpose of developing the risk solution services is to provide a complete and comprehensive risk management\n    for the eCommerce/mail-order industry, contributing to a high level of modularization and automation. Besides the use\n    of pre-configured service modules for risk ...",t:"Risk Solution Services Integration - Arvato"},"215":{i:0.00126162820427952,u:"../developing_with_spryker/industry_partner_integration/arvatorss/integration_arvato_rss_risk_check.html",a:"\n    Accounted for by external credit agency data and internal existing customer- and order-details\n    the RiskCheck evaluates the probability of payment default for the customer orders.\n \n    The returned decision codes (Result – ActionCode – ResultCode) manage the definition of the eShop’s ...",t:"Risk Check - Arvato Risk Solution Services"},"216":{i:0.00106688363471471,u:"../developing_with_spryker/industry_partner_integration/econda/integration_monitoring_econda.html",a:"Performance Monitoring - Econda (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Performance Monitoring - Econda (BETA)"},"217":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_minubo.html",a:"Performance Monitoring - Minubo Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Minubo"},"218":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/preformance_monitoring_styla.html",a:"Performance Monitoring - Styla Partner Information STYLA Documentation https://www.styla.com/de/ressourcen/?iso=de\n Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Styla"},"219":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_channelpilot.html",a:"Performance Monitoring - Channel Pilot Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Channel Pilot"},"220":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_datavirtuality.html",a:"Performance Monitoring - Data Virtuality Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Data Virtuality"},"221":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/performance_monitoring_nitrobox.html",a:"Performance Monitoring - Nitrobox Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Performance Monitoring - Nitrobox"},"222":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information RatePAY is an online service provider that allows merchants to provide their customers secure, customized payment methods.  RatePAY bears the full risk and takes ...",t:"Payment Integration - RatePAY"},"223":{i:0.000863585452966574,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_payment_workflow.html",a:"Invoice, Prepayment and Direct Debit methods have the same request flow.  The payment workflow consists of the following requests:\n PAYMENT INIT - Initialize the transaction and get a valid transaction-id.\n PAYMENT QUERY - Check the customer and order details, perform a configurable risk scoring, ...",t:"Payment Workflow - RatePAY"},"224":{i:0.00124074078087951,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_invoice.html",a:"Workflow Scenarios\n Integrating RatePAY Invoice Payment\n To integrate invoice payment, you need to: RatePAY invoice payment configuration and call the facade functions.\n Setting RatePAY Invoice Configuration\n The configuration to integrate invoice payments using RatePAY is:\n\n PROFILE_ID: merchant’s ...",t:"Invoice - RatePAY"},"225":{i:0.00124074078087951,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_prepayment.html",a:"Workflow Scenarios\n Integrating RatePAY Prepayment Payment\n To integrate prepayment payment: set RatePAY prepayment payment configuration and call the facade functions.\n\n Set RatePAY Prepayment Configuration\n The configuration to integrate prepayment payments using RatePAY is:\n\n PROFILE_ID: ...",t:"Prepayment - RatePAY"},"226":{i:0.00124074078087951,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_dir_deb.html",a:"Workflow Scenarios\n Integrating RatePAY  Direct Debit Payment\nIn order to integrate direct debit payment, two simple steps are needed: set RatePAY Direct Debit payment configuration and call the facade functions.\n \nSet RatePAY Direct Debit Configuration\n The configuration to integrate Direct Debit ...",t:"Direct Debit (ELV) - RatePAY"},"227":{i:0.00124074078087951,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_installment.html",a:"The shop must implement the Calculation Request operation to calculate an example installment plan and show it to the customer. Some input parameters for the calculation are passed from the shop (e.g. the shopping basket total), others are stored in the merchant’s RatePAY profile held by the Gateway ...",t:"Installment - RatePAY"},"228":{i:0.00402749130829208,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_state_machine.html",a:"Commands\n ConfirmDelivery\n \nSend delivery confirmation data to RatePAY\n Response:\n Success: Delivery confirmed\n Declined: Request format error or delivery confirmation error\n Plugin: ConfirmDeliveryPlugin\n ConfirmPayment \n\nSend payment confirmation data to RatePAY\n Response:\n Success: Payment ...",t:"RatePAY State Machine Commands and Conditions"},"229":{i:0.000863585452966574,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_structure_diag.html",a:"RatePAY Core Module Structure Diagram The RatePAY core module uses the following class structure and flow.\n",t:"RatePAY Core Module Structure Diagram"},"230":{i:0.000863585452966574,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_facade.html",a:"RatePAY Facade\n",t:"RatePAY Facade\n"},"231":{i:0.000863585452966574,u:"../developing_with_spryker/industry_partner_integration/ratepay/integration_payment_ratepay_disable_addr_updates.html",a:"To disable updates on addresses from the backend application, follow the steps described below:\n\n Step 1:\n\n Overwrite on project side  ‘/vendor/spryker/spryker/Bundles/Sales/src/Spryker/ Zed/Sales/Presentation/Detail/boxes/addresses.twig’\n Remove ‘Edit’ button\n Step 2:\n\n Overwrite on project side  ...",t:"How to disable address updates from the backend application - RatePAY"},"232":{i:0.00093656644950604,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone.html",a:"Partner Information We integrate with a wide range of payment methods that can be configured according to your needs and convenience. Payment method flows are configured using state machines.\n\n Payone provides seven main methods of payment:\n\n Credit Card Direct Debit\n Online Transfer Paypal ...",t:"Payment Integration - BS Payone"},"233":{i:0.00113773062430302,u:"../developing_with_spryker/industry_partner_integration/payone/authorization_and_preauthorization_capture_flows.html",a:"Payone module makes it possible for a project to choose which Payone flow it wants to implement: authorize or preauthorize + capture. Authorization Example State Machine: Authorization state machine example xml can be found in vendor/\u003cpayone_module_folder\u003e/src/config/Zed/Oms/PayoneInvoice.xml ...",t:"Authorization and Preauthorization-Capture Flows"},"234":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_credit_card.html",a:"PCI Compliance Because of PCI compliance reasons, credit card data is communicated to the third party through AJAX calls (sensitive information stays browser side).\n PCI Compliance\n The Payment Card Industry Data Security Standard ( PCI DSS ) is a set of rules with the intention to ensure that ...",t:"Credit Card Payment - Payone"},"235":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_dir_deb.html",a:"Front-end integration\n Run the antelope build yves after you include the javascript file for credit card check inside the payment step template (e.g. src/\u003cproject_name\u003e/Yves/Checkout/Theme/\u003ccustom_theme_name\u003e/checkout/payment.twig)\n\n {% block content %}\n\u003cscript ...",t:"Direct Debit Payment- Payone"},"236":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_online_trans.html",a:"Supported online banking service providers are SofortBanking, Giropay, Electronic Payment Standard (Eps), PostFinance Card, PostFinance E-Finance, iDEAL and Przelewy24. They are enabled  through the integration with Payone, using the online transfer payment type.\n\n Each payment method is limited to ...",t:"Online Transfer Payment- Payone"},"237":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_prepayment.html",a:"Prepayment method is a safe alternative to payments involving credit cards or debit cards (such as online banking transfer). Usually bank transfer would require manual processing to mark transaction as cancelled or completed, but the process is fully automated through the integration with the Payone ...",t:"Pre-payment - Payone"},"238":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal.html",a:"The payment using PayPal requires a redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction.\n \nA concern regarding payment flows that require redirection on third party website pages ...",t:"Paypal Payment - Payone"},"239":{i:0.00113773062430302,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_paypal_express_checkout.html",a:"The payment using PayPal requires redirect to PayPal website. When the customer is redirected to PayPal’s website, he must authorize himself and he has the option to either cancel or validate the transaction. A concern regarding payment flows that require redirection on third party website pages is ...",t:"PayPal Express Checkout Payment - Payone"},"240":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_invoice.html",a:"Front-end Integration\n To adjust the frontend appearance, provide the following templates in your theme directory:\n\nsrc/\u003cproject_name\u003e/Yves/Payone/Theme/\u003ccustom_theme_name\u003e/invoice.twig State Machine Integration\n Payone module provides a demo state machine for the Invoice payment method which ...",t:"Invoice Payment - Payone"},"241":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_state_machine_cmd_cond_evnt.html",a:"State Machine Commands, Conditions and Events - Payone",t:"State Machine Commands, Conditions and Events - Payone"},"242":{i:0.000943194003229163,u:"../developing_with_spryker/industry_partner_integration/payone/integration_payment_payone_facade.html",a:"Payone Facade  ",t:"Payone Facade"},"243":{i:0.00587468439663994,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay.html",a:"  Partner Information Amazon pay consists of client side tools (widget, javascripts etc) and Amazon API with SDKs written for different\n            programming languages (PHP, Python, Ruby, Java, C#). Client side tools are used for displaying GUI elements on some common pages of an internet shop and ...",t:"Payment Integration - Amazon Pay"},"244":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_configuration.html",a:"\n            Please refer to config/Shared/config.dist.php for example of module configuration.\n         To setup the Amazon Pay initial configuration, use the credentials you received after registering as an Amazon seller: \n$config[AmazonpayConstants::CLIENT_ID] = ...",t:"Amazon Pay - Configuration"},"245":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_rendering_pay.html",a:"Usually the checkout page includes information for the buyer to review, items in the cart, prices, total price information and some other order related details. From this page, the buyer can proceed to checkout by clicking a related GUI element (for example hyperlink or button). Amazon Pay provides ...",t:"Rendering a \"Pay with Amazon\" Button on the Cart Page"},"246":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_order_ref_info.html",a:"After successful authorization, a buyer will be redirected to an order details page to enter all the information necessary for placing an order: address of shipment, payment method, delivery method and some calculations about taxes, possible discounts, delivery cost, etc. Amazon Pay provides ...",t:"Obtaining an Amazon Order Reference and Information about Shipping Addresses"},"247":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_api.html",a:"So far we discussed the client side implementation provided by Amazon Pay. On the Spryker OS side, the module provides tools for rendering Amazon Pay widgets. Another part of the implementation is the Amazon Pay API function wrapper, implemented as a Facade. Each API call involves similar classes ...",t:"Amazon Pay API"},"248":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_refund.html",a:"After successful authorization and capture processes order should be closed. This blocks any modifications to\n            an order. From this state only Refund operation is possible. Refund can be partial if more than one item is\n            set to refund or full. Amazon only requires the amount of ...",t:"Amazon Pay - Refund"},"249":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_state_machine.html",a:"The state machine is different for synchronous and asynchronous flow. Although from status \"capture\n            completed\" it is the same and in the state machine, it\u0027s presented as a sub-process. State machine for the synchronous flow: State machine for the asynchronous flow:   See also: Payment ...",t:"Amazon Pay - State Machine"},"250":{i:0.0058096058471088,u:"../developing_with_spryker/industry_partner_integration/amazonpay/integration_payment_amazon_pay_simulations.html",a:"In order to reproduce some edge cases like declined payment or pending capture, Amazon provides two solutions. The first is special methods marked with red star on payment widget. It allows to reproduce different cases of \"decline\" payment workflow. But there are more edge cases like expired ...",t:"Amazon Pay Sandbox Simulations"},"251":{i:0.00106688363471471,u:"../developing_with_spryker/industry_partner_integration/billpay/integration_payment_billpay.html",a:"Payment Integration - Billpay (BETA) BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Billpay (BETA)"},"252":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/integration_payment_braintree.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Braintree provides two methods of payment:\n\n PayPal Credit Card To integrate Braintree payments, you need to create and configure a Braintree merchant account.\n\n There are two types of ...",t:"Payment Integration - Braintree (BETA)"},"253":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/integration_payment_afterpay.html",a:"Payment Integration - After Pay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - After Pay"},"254":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/klarna/integration_payment_klarna.html",a:"Payment Integration  - Klarna BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information",t:"Payment Integration  - Klarna"},"255":{i:0.00093656644950604,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution.html",a:"BETA version\n This module is still in development. For questions and inquiries please contact  academy@spryker.com Partner Information Payolution provides two methods of payment:\n\n Invoice \nInstallment\n In order to integrate Payolution payments, a Payolution merchant account should be created and ...",t:"Payment Integration - Payolution"},"256":{i:0.00106260682862305,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_integrating.html",a:"To add Payolution as payment provider to your project you need to follow these steps:\n\n Add spryker/payolution to your project by running composer require spryker/payolution Copy over configs to your config using the provided config.dist.php file from the Payolution module.\n With the provided ...",t:"Integrating Payolution into your Project"},"257":{i:0.00106260682862305,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_invoice.html",a:"Workflow Scenarios\n Payments from Payolution to Merchant are not included in the sequence diagrams since they occur on a regular basis (e.g. every week).\n\n Standard Case\n Full Refund Before Payment Partial Refund Before Payment\n Full Refund After Payment\n Partial Refund After Payment\n Integrating ...",t:"Invoice Payment - Payolution"},"258":{i:0.00106260682862305,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_installment.html",a:"Installment Scenarios\n Standard Case\n Full Refund\n  \n\nPartial Refund\n Integrating Payolution Installment Payment\n The In order to integrate installment payment, two simple steps are needed: set Payolution installment payment configuration and call the facade functions.\n\n Set Payolution Installment ...",t:"Installment Payment - Payolution"},"259":{i:0.0019658273193964,u:"../developing_with_spryker/industry_partner_integration/payolution/integration_payment_payolution_requests.html",a:"In order to perform the needed requests, you can easily use the implemented state machine commands and conditions. The next section gives a summary of them. You can also use the facade methods directly which, however, are invoked by the state machine.\n\n Payolution State Machine Commands and ...",t:"Perform Requests - Payolution"},"260":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/integration_payment_computop.html",a:"Payment Integration - Computop Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Computop"},"261":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/integration_payment_heidelpay.html",a:"Payment Integration - Heidelpay Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Payment Integration - Heidelpay"},"262":{i:0.00093656644950604,u:"../developing_with_spryker/industry_partner_integration/hosting_continum.html",a:"Hosting Provider - Continum Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Continum"},"263":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/hosting_claranet.html",a:"Hosting Provider - Claranet Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Claranet"},"264":{i:0.000911254337855628,u:"../developing_with_spryker/industry_partner_integration/hosting_root360.html",a:"Hosting Provider - Root 360 Partner Information Copyright and Disclaimer See  Disclaimer .",t:"Hosting Provider - Root 360"},"265":{i:0.00146791338622227,u:"../developing_with_spryker/industry_partner_integration/integration_loggly_queue.html",a:"The Loggly module provides a plugin to read log messages from a queue and send the messages via https to  Loggly . To integrate this plugin you need to have the QueueHandler enabled in your Logger configuration as described  here . In addition you need to properly configure the queue setup for ...",t:"Queue Integration - Loggly"},"266":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/development_concepts.html",a:"Spryker is a complex application. We have established certain concepts and implementation abstractions that help us to structure and optimise our application. Before getting your hands dirty and starting to work with Spryker, you should understand our concepts behind certain topics. For example you ...",t:"Development Concepts"},"267":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/search_design_paterns.html",a:" Search Design Patterns for E-Commerce: Schema Structure, Data Driven Ranking \u0026 More Source:  http://project-a.github.io/on-site-search-design-patterns-for-e-commerce/ By  Dr. Martin Loetzsch  ( Project A ) and Krešimir Slugan ( Contorion ) Providing users with a proper on-site search user ...",t:"On-Site Search "},"268":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/data_driven_ranking.html",a:"When a query returns hundreds or thousands of results, it is absolutely crucial that the products at the top of the search result page are the ones that are most relevant to the user. Getting this right will lead to a higher conversion probability and increase customer happiness. Implementing proper ...",t:"Data-Driven Ranking"},"269":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/full_text_search.html",a:"Full-text search is a feature where a user enters arbitrary text into a search field and then gets documents that are relevant for that query. It is normally combined with faceted navigation. In the example below, a user searched for “hammer” and then further filtered for hammer weights of 2000 gram ...",t:"Full-Text Search"},"270":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/generic_faceted_search.html",a:"Faceted search (sometimes also called faceted navigation) allows users to navigate through a web site by applying filters for categories, attributes, price ranges and so on. It’s probably the most basic feature of a search and users expect this to work. Unfortunately, we observed that this is also ...",t:"Generic Faceted Search"},"271":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/multi_term_auto_completion.html",a:"Term completion is a feature where a user gets suggestions for search terms and matching search results as he types the query. We call a completion multi-term when it is able to combine terms from different attributes in an open-ended fashion. In the below example, a user entered “fortis” (a brand) ...",t:"Multi-Term Auto Completion"},"272":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/naive_product_centric_approach.html",a:"A Naive Product Centric Approach Finding products on e-commerce website can be tricky, even when you know exactly what you are looking for. Throughout this document, we will assume a customer wants to buy a hammer that weighs 2kg. A product that would meet his needs might be this “Fäustel” by ...",t:"A Naive Product-Centric Approach"},"273":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/other_best_practices.html",a:"Finally, we want to provide you with a list of some additional and potentially useful principles regarding the setup of an on-site search experience.\n \nIndex Pages, Not Products\n\n Each document we put in Elasticsearch corresponds to an URL  The mapping type in our schema is called page, not product ...",t:"Other Best Practices"},"274":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/personalization_dymanic_pricing.html",a:"Especially in businesses with a B2B focus, customers expect to get discounts after they have been using the service/website for a longer period of time. The search infrastructure should be able to handle such use cases and customers should be able to see their own discounted prices while browsing ...",t:"Personalization: Dynamic Pricing"},"275":{i:0.000863585452966574,u:"../developing_with_spryker/development_concepts/search_design/simple_spelling_suggestions.html",a:"Spelling suggestions provide the users with alternative search terms when the search query does not return any results:\n Translation: Unfortunately there were 0 results for your exact search term “hammer holk”. Did you possibly mean hammer holz? This is one of the simplest features you can build ...",t:"Simple Spelling Suggestions"},});