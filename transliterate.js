(function() {
    var _UDS_CONST_LOCALE = 'en';
    var _UDS_CONST_SHORT_DATE_PATTERN = 'MDY';
    var _UDS_MSG_SEARCHER_IMAGE = ('Image');
    var _UDS_MSG_SEARCHER_WEB = ('Web');
    var _UDS_MSG_SEARCHER_BLOG = ('Blog');
    var _UDS_MSG_SEARCHER_VIDEO = ('Video');
    var _UDS_MSG_SEARCHER_LOCAL = ('Local');
    var _UDS_MSG_SEARCHCONTROL_SAVE = ('save');
    var _UDS_MSG_SEARCHCONTROL_KEEP = ('keep');
    var _UDS_MSG_SEARCHCONTROL_INCLUDE = ('include');
    var _UDS_MSG_SEARCHCONTROL_COPY = ('copy');
    var _UDS_MSG_SEARCHCONTROL_CLOSE = ('close');
    var _UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS = ('Sponsored Links');
    var _UDS_MSG_SEARCHCONTROL_SEE_MORE = ('see more...');
    var _UDS_MSG_SEARCHCONTROL_WATERMARK = ('clipped from Google');
    var _UDS_MSG_SEARCHER_CONFIG_SET_LOCATION = ('Search location');
    var _UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP = ('Disable address lookup');
    var _UDS_MSG_SEARCHER_NEWS = ('News');
    function _UDS_MSG_MINUTES_AGO(AGE_MINUTES_AGO) {return ('' + AGE_MINUTES_AGO + ' minutes ago');}
    var _UDS_MSG_ONE_HOUR_AGO = ('1 hour ago');
    function _UDS_MSG_HOURS_AGO(AGE_HOURS_AGO) {return ('' + AGE_HOURS_AGO + ' hours ago');}
    function _UDS_MSG_NEWS_ALL_N_RELATED(NUMBER) {return ('all ' + NUMBER + ' related');}
    var _UDS_MSG_NEWS_RELATED = ('Related Articles');
    var _UDS_MSG_BRANDING_STRING = ('powered by Google');
    var _UDS_MSG_SORT_BY_DATE = ('Sort by date');
    var _UDS_MSG_MONTH_ABBR_JAN = ('Jan');
    var _UDS_MSG_MONTH_ABBR_FEB = ('Feb');
    var _UDS_MSG_MONTH_ABBR_MAR = ('Mar');
    var _UDS_MSG_MONTH_ABBR_APR = ('Apr');
    var _UDS_MSG_MONTH_ABBR_MAY = ('May');
    var _UDS_MSG_MONTH_ABBR_JUN = ('Jun');
    var _UDS_MSG_MONTH_ABBR_JUL = ('Jul');
    var _UDS_MSG_MONTH_ABBR_AUG = ('Aug');
    var _UDS_MSG_MONTH_ABBR_SEP = ('Sep');
    var _UDS_MSG_MONTH_ABBR_OCT = ('Oct');
    var _UDS_MSG_MONTH_ABBR_NOV = ('Nov');
    var _UDS_MSG_MONTH_ABBR_DEC = ('Dec');
    var _UDS_MSG_DIRECTIONS = ('directions');
    var _UDS_MSG_CLEAR_RESULTS = ('clear results');
    var _UDS_MSG_SHOW_ONE_RESULT = ('show one result');
    var _UDS_MSG_SHOW_MORE_RESULTS = ('show more results');
    var _UDS_MSG_SHOW_ALL_RESULTS = ('show all results');
    var _UDS_MSG_SETTINGS = ('settings');
    var _UDS_MSG_SEARCH = ('search');
    var _UDS_MSG_SEARCH_UC = ('Search');
    var _UDS_MSG_POWERED_BY = ('powered by');
    function _UDS_MSG_LOCAL_ATTRIBUTION(LOCAL_RESULTS_PROVIDER) {return ('Business listings provided by ' + LOCAL_RESULTS_PROVIDER + '');}
    var _UDS_MSG_SEARCHER_BOOK = ('Book');
    function _UDS_MSG_FOUND_ON_PAGE(FOUND_ON_PAGE) {return ('Page ' + FOUND_ON_PAGE + '');}
    function _UDS_MSG_TOTAL_PAGE_COUNT(PAGE_COUNT) {return ('' + PAGE_COUNT + ' pages');}
    var _UDS_MSG_SEARCHER_BY = ('by');
    var _UDS_MSG_SEARCHER_CODE = ('Code');
    var _UDS_MSG_UNKNOWN_LICENSE = ('Unknown License');
    var _UDS_MSG_SEARCHER_GSA = ('Search Appliance');
    var _UDS_MSG_SEARCHCONTROL_MORERESULTS = ('More results');
    var _UDS_MSG_SEARCHCONTROL_PREVIOUS = ('Previous');
    var _UDS_MSG_SEARCHCONTROL_NEXT = ('Next');
    var _UDS_MSG_GET_DIRECTIONS = ('Get directions');
    var _UDS_MSG_GET_DIRECTIONS_TO_HERE = ('To here');
    var _UDS_MSG_GET_DIRECTIONS_FROM_HERE = ('From here');
    var _UDS_MSG_CLEAR_RESULTS_UC = ('Clear results');
    var _UDS_MSG_SEARCH_THE_MAP = ('search the map');
    var _UDS_MSG_SCROLL_THROUGH_RESULTS = ('scroll through results');
    var _UDS_MSG_EDIT_TAGS = ('edit tags');
    var _UDS_MSG_TAG_THIS_SEARCH = ('tag this search');
    var _UDS_MSG_SEARCH_STRING = ('search string');
    var _UDS_MSG_OPTIONAL_LABEL = ('optional label');
    var _UDS_MSG_DELETE = ('delete');
    var _UDS_MSG_DELETED = ('deleted');
    var _UDS_MSG_CANCEL = ('cancel');
    var _UDS_MSG_UPLOAD_YOUR_VIDEOS = ('upload your own video');
    var _UDS_MSG_IM_DONE_WATCHING = ('i\047m done watching this');
    var _UDS_MSG_CLOSE_VIDEO_PLAYER = ('close video player');
    var _UDS_MSG_NO_RESULTS = ('No Results');
    var _UDS_MSG_LINKEDCSE_ERROR_RESULTS = ('This Custom Search Engine is loading. Try again in a few seconds.');
    var _UDS_MSG_COUPONS = ('Coupons');
    var _UDS_MSG_BACK = ('back');
    var _UDS_MSG_SUBSCRIBE = ('Subscribe');
    var _UDS_MSG_SEARCHER_PATENT = ('Patent');
    var _UDS_MSG_USPAT = ('US Pat.');
    var _UDS_MSG_USPAT_APP = ('US Pat. App');
    var _UDS_MSG_PATENT_FILED = ('Filed');
    var _UDS_MSG_ADS_BY_GOOGLE = ('Ads by Google');
    var _UDS_MSG_SET_DEFAULT_LOCATION = ('Set default location');
    var _UDS_MSG_NEWSCAT_TOPSTORIES = ('Top Stories');
    var _UDS_MSG_NEWSCAT_WORLD = ('World');
    var _UDS_MSG_NEWSCAT_NATION = ('Nation');
    var _UDS_MSG_NEWSCAT_BUSINESS = ('Business');
    var _UDS_MSG_NEWSCAT_SCITECH = ('Sci/Tech');
    var _UDS_MSG_NEWSCAT_ENTERTAINMENT = ('Entertainment');
    var _UDS_MSG_NEWSCAT_HEALTH = ('Health');
    var _UDS_MSG_NEWSCAT_SPORTS = ('Sports');
    var _UDS_MSG_NEWSCAT_POLITICS = ('Politics');
    var _UDS_MSG_SEARCH_RESULTS = ('Search results');
    var _UDS_MSG_DID_YOU_MEAN = ('Did you mean:');
    var _UDS_MSG_CUSTOM_SEARCH = ('Custom Search');
    var _UDS_MSG_LABELED = ('Labeled');
    var _UDS_MSG_LOADING = ('Loading...');
    var _UDS_MSG_ALL_RESULTS_SHORT = ('All');
    var _UDS_MSG_ALL_RESULTS_LONG = ('All results');
    var _UDS_MSG_REFINE_RESULTS = ('Refine results:');
    function _UDS_MSG_REVIEWS(REVIEW_COUNT) {return ('' + REVIEW_COUNT + ' reviews');}
    function _UDS_MSG_CALORIES(CALORIES) {return ('' + CALORIES + ' cal');}
    function _UDS_MSG_PRICE_RANGE(RANGE) {return ('Price range: ' + RANGE + '.');}
    function _UDS_MSG_PRICE(PRICE) {return ('Price: ' + PRICE + '.');}
    function _UDS_MSG_AVAILABILITY(AVAILABILITY) {return ('Availability: ' + AVAILABILITY + '.');}
    function _UDS_MSG_TELEPHONE(TELEPHONE) {return ('Tel: ' + TELEPHONE + '');}
    function _UDS_MSG_RESULT_INFO(NUMBER_OF_RESULTS, SEARCH_TIME) {return ('About ' + NUMBER_OF_RESULTS + ' results (' + SEARCH_TIME + ' seconds)');}
    var _UDS_MSG_FILE_FORMAT = ('File Format:');
    var _UDS_MSG_SHOWING_RESULTS_FOR = ('Showing results for');
    var _UDS_MSG_SEARCH_INSTEAD_FOR = ('Search instead for');
    function _UDS_MSG_FILTERED_RESULTS(NUM) {return ('In order to show you the most relevant results, we have omitted some entries very similar to the ' + NUM + ' already displayed. If you like, you can ' + '<a>repeat the search with the omitted results included' + '</a>.');}
    var _UDS_MSG_ORDER_BY = ('Sort by:');
    var _UDS_MSG_ORDER_BY_RELEVANCE = ('Relevance');
    var _UDS_MSG_ORDER_BY_DATE = ('Date');
    var _UDS_MSG_ORDER_BY_GET_LINK = ('Share this page:');
    var _UDS_MSG_ADD_LABEL = ('Add Label');
    var _UDS_MSG_NO_REFINEMENT =
        ('Refinements should be present before adding label');
    var _UDS_MSG_LABEL_PAGE = ('This particular page');
    var _UDS_MSG_LABEL_SITE = ('Entire site');
    var _UDS_MSG_LABEL_PREFIX = ('Specific page prefix');
    var _UDS_MSG_INVALID_URL_PREFIX = ('Invalid url prefix');
    var _UDS_MSG_ERROR_ADDING_LABEL = ('Error adding label.');
    var _UDS_MSG_SAVING = ('Saving...');
    var _UDS_MSG_ADD_LABEL_SAVE = ('Save');
    var _UDS_MSG_ADD_LABEL_CANCEL = ('Cancel');
    
    var b={blank:"&nbsp;"};b.image=_UDS_MSG_SEARCHER_IMAGE;b.web=_UDS_MSG_SEARCHER_WEB;b.blog=_UDS_MSG_SEARCHER_BLOG;b.video=_UDS_MSG_SEARCHER_VIDEO;b.local=_UDS_MSG_SEARCHER_LOCAL;b.news=_UDS_MSG_SEARCHER_NEWS;b.book=_UDS_MSG_SEARCHER_BOOK;b.patent=_UDS_MSG_SEARCHER_PATENT;b["ads-by-google"]=_UDS_MSG_ADS_BY_GOOGLE;b.save=_UDS_MSG_SEARCHCONTROL_SAVE;b.keep=_UDS_MSG_SEARCHCONTROL_KEEP;b.include=_UDS_MSG_SEARCHCONTROL_INCLUDE;b.copy=_UDS_MSG_SEARCHCONTROL_COPY;b.close=_UDS_MSG_SEARCHCONTROL_CLOSE;
    b["sponsored-links"]=_UDS_MSG_SEARCHCONTROL_SPONSORED_LINKS;b["see-more"]=_UDS_MSG_SEARCHCONTROL_SEE_MORE;b.watermark=_UDS_MSG_SEARCHCONTROL_WATERMARK;b["search-location"]=_UDS_MSG_SEARCHER_CONFIG_SET_LOCATION;b["disable-address-lookup"]=_UDS_MSG_SEARCHER_CONFIG_DISABLE_ADDRESS_LOOKUP;b["sort-by-date"]=_UDS_MSG_SORT_BY_DATE;b.pbg=_UDS_MSG_BRANDING_STRING;b["n-minutes-ago"]=_UDS_MSG_MINUTES_AGO;b["n-hours-ago"]=_UDS_MSG_HOURS_AGO;b["one-hour-ago"]=_UDS_MSG_ONE_HOUR_AGO;b["all-n-related"]=_UDS_MSG_NEWS_ALL_N_RELATED;
    b["related-articles"]=_UDS_MSG_NEWS_RELATED;b["page-count"]=_UDS_MSG_TOTAL_PAGE_COUNT;var h=[];h[0]=_UDS_MSG_MONTH_ABBR_JAN;h[1]=_UDS_MSG_MONTH_ABBR_FEB;h[2]=_UDS_MSG_MONTH_ABBR_MAR;h[3]=_UDS_MSG_MONTH_ABBR_APR;h[4]=_UDS_MSG_MONTH_ABBR_MAY;h[5]=_UDS_MSG_MONTH_ABBR_JUN;h[6]=_UDS_MSG_MONTH_ABBR_JUL;h[7]=_UDS_MSG_MONTH_ABBR_AUG;h[8]=_UDS_MSG_MONTH_ABBR_SEP;h[9]=_UDS_MSG_MONTH_ABBR_OCT;h[10]=_UDS_MSG_MONTH_ABBR_NOV;h[11]=_UDS_MSG_MONTH_ABBR_DEC;b["month-abbr"]=h;b.directions=_UDS_MSG_DIRECTIONS;
    b["clear-results"]=_UDS_MSG_CLEAR_RESULTS;b["show-one-result"]=_UDS_MSG_SHOW_ONE_RESULT;b["show-more-results"]=_UDS_MSG_SHOW_MORE_RESULTS;b["show-all-results"]=_UDS_MSG_SHOW_ALL_RESULTS;b.settings=_UDS_MSG_SETTINGS;b.search=_UDS_MSG_SEARCH;b["search-uc"]=_UDS_MSG_SEARCH_UC;b["powered-by"]=_UDS_MSG_POWERED_BY;b.sa=_UDS_MSG_SEARCHER_GSA;b.by=_UDS_MSG_SEARCHER_BY;b.code=_UDS_MSG_SEARCHER_CODE;b["unknown-license"]=_UDS_MSG_UNKNOWN_LICENSE;b["more-results"]=_UDS_MSG_SEARCHCONTROL_MORERESULTS;
    b.previous=_UDS_MSG_SEARCHCONTROL_PREVIOUS;b.next=_UDS_MSG_SEARCHCONTROL_NEXT;b["get-directions"]=_UDS_MSG_GET_DIRECTIONS;b["to-here"]=_UDS_MSG_GET_DIRECTIONS_TO_HERE;b["from-here"]=_UDS_MSG_GET_DIRECTIONS_FROM_HERE;b["clear-results-uc"]=_UDS_MSG_CLEAR_RESULTS_UC;b["search-the-map"]=_UDS_MSG_SEARCH_THE_MAP;b["scroll-results"]=_UDS_MSG_SCROLL_THROUGH_RESULTS;b["edit-tags"]=_UDS_MSG_EDIT_TAGS;b["tag-search"]=_UDS_MSG_TAG_THIS_SEARCH;b["search-string"]=_UDS_MSG_SEARCH_STRING;b["optional-label"]=_UDS_MSG_OPTIONAL_LABEL;
    b["delete"]=_UDS_MSG_DELETE;b.deleted=_UDS_MSG_DELETED;b.cancel=_UDS_MSG_CANCEL;b["upload-video"]=_UDS_MSG_UPLOAD_YOUR_VIDEOS;b["im-done"]=_UDS_MSG_IM_DONE_WATCHING;b["close-player"]=_UDS_MSG_CLOSE_VIDEO_PLAYER;b["no-results"]=_UDS_MSG_NO_RESULTS;b["linked-cse-error-results"]=_UDS_MSG_LINKEDCSE_ERROR_RESULTS;b.back=_UDS_MSG_BACK;b.subscribe=_UDS_MSG_SUBSCRIBE;b["us-pat"]=_UDS_MSG_USPAT;b["us-pat-app"]=_UDS_MSG_USPAT_APP;b["us-pat-filed"]=_UDS_MSG_PATENT_FILED;b.dym=_UDS_MSG_DID_YOU_MEAN;
    b["showing-results-for"]=_UDS_MSG_SHOWING_RESULTS_FOR;b["search-instead-for"]=_UDS_MSG_SEARCH_INSTEAD_FOR;b["custom-search"]=_UDS_MSG_CUSTOM_SEARCH;b.labeled=_UDS_MSG_LABELED;b.loading=_UDS_MSG_LOADING;b["all-results-short"]=_UDS_MSG_ALL_RESULTS_SHORT;b["all-results-long"]=_UDS_MSG_ALL_RESULTS_LONG;b["refine-results"]=_UDS_MSG_REFINE_RESULTS;b["result-info"]=_UDS_MSG_RESULT_INFO;b["file-format"]=_UDS_MSG_FILE_FORMAT;b["order-results-by"]=_UDS_MSG_ORDER_BY;b["order-by-relevance"]=_UDS_MSG_ORDER_BY_RELEVANCE;
    b["order-by-date"]=_UDS_MSG_ORDER_BY_DATE;b["get-link"]=_UDS_MSG_ORDER_BY_GET_LINK;b["add-label"]="Add Label";b["no-refinement"]="Refinements should be present before adding label";b["label-page"]="This particular page";b["label-site"]="Entire site";b["label-prefix"]="Specific page prefix";b["invalid-url-prefix"]="Invalid url prefix";b["error-adding-label"]="Error adding label.";b.saving="Saving...";b.Save="Save";b.Cancel="Cancel";b["structured-data"]="Structured data";var _json_cache_defeater_=(new Date).getTime(),_json_request_require_prep=!0;function k(a,c){var d;if(d=l("msie"))d="msie 6.0"in m?m["msie 6.0"]:m["msie 6.0"]=-1!=navigator.appVersion.toLowerCase().indexOf("msie 6.0");d?window.setTimeout(n(this,p,[a,c]),0):p(a,c)}
    function p(a,c){var d=document.getElementsByTagName("head")[0];d||(d=document.body.parentNode.appendChild(document.createElement("head")));var e=document.createElement("script");e.type="text/javascript";e.charset="utf-8";a=_json_request_require_prep?a+"&key="+google.loader.ApiKey+"&v="+c:a;if(l("msie")||l("safari")||l("konqueror"))a=a+"&nocache="+_json_cache_defeater_++;e.src=a;var f=function(){e.onload=null;e.parentNode.removeChild(e)};a=function(a){a=a?a:window.event;a=a.target?a.target:a.srcElement;
    if("loaded"==a.readyState||"complete"==a.readyState)a.onreadystatechange=null,f()};"Gecko"==navigator.product?e.onload=f:e.onreadystatechange=a;d.appendChild(e)}function n(a,c,d){return function(){return c.apply(a,d||[])}}function l(a){return a in q?q[a]:q[a]=-1!=navigator.userAgent.toLowerCase().indexOf(a)}var q={},m={},r,t;window.ActiveXObject&&(r=!0,window.XMLHttpRequest&&(t=!0));if(!u)var u=google_exportSymbol;if(!v)var v=google_exportProperty;
    google.language.f={AFRIKAANS:"af",ALBANIAN:"sq",AMHARIC:"am",ARABIC:"ar",ARMENIAN:"hy",AZERBAIJANI:"az",BASQUE:"eu",BELARUSIAN:"be",BENGALI:"bn",BIHARI:"bh",BULGARIAN:"bg",BURMESE:"my",BRETON:"br",CATALAN:"ca",CHEROKEE:"chr",CHINESE:"zh",CHINESE_SIMPLIFIED:"zh-CN",CHINESE_TRADITIONAL:"zh-TW",CORSICAN:"co",CROATIAN:"hr",CZECH:"cs",DANISH:"da",DHIVEHI:"dv",DUTCH:"nl",ENGLISH:"en",ESPERANTO:"eo",ESTONIAN:"et",FAROESE:"fo",FILIPINO:"tl",FINNISH:"fi",FRENCH:"fr",FRISIAN:"fy",GALICIAN:"gl",GEORGIAN:"ka",
    GERMAN:"de",GREEK:"el",GUJARATI:"gu",HAITIAN_CREOLE:"ht",HEBREW:"iw",HINDI:"hi",HUNGARIAN:"hu",ICELANDIC:"is",INDONESIAN:"id",INUKTITUT:"iu",IRISH:"ga",ITALIAN:"it",JAPANESE:"ja",JAVANESE:"jw",KANNADA:"kn",KAZAKH:"kk",KHMER:"km",KOREAN:"ko",KURDISH:"ku",KYRGYZ:"ky",LAO:"lo",LAOTHIAN:"lo",LATIN:"la",LATVIAN:"lv",LITHUANIAN:"lt",LUXEMBOURGISH:"lb",MACEDONIAN:"mk",MALAY:"ms",MALAYALAM:"ml",MALTESE:"mt",MAORI:"mi",MARATHI:"mr",MONGOLIAN:"mn",NEPALI:"ne",NORWEGIAN:"no",OCCITAN:"oc",ORIYA:"or",PASHTO:"ps",
    PERSIAN:"fa",POLISH:"pl",PORTUGUESE:"pt",PORTUGUESE_PORTUGAL:"pt-PT",PUNJABI:"pa",QUECHUA:"qu",ROMANIAN:"ro",RUSSIAN:"ru",SANSKRIT:"sa",SCOTS_GAELIC:"gd",SERBIAN:"sr",SINDHI:"sd",SINHALESE:"si",SLOVAK:"sk",SLOVENIAN:"sl",SPANISH:"es",SUNDANESE:"su",SWAHILI:"sw",SWEDISH:"sv",SYRIAC:"syr",TAJIK:"tg",TAMIL:"ta",TAGALOG:"tl",TATAR:"tt",TELUGU:"te",THAI:"th",TIBETAN:"bo",TONGA:"to",TURKISH:"tr",UKRAINIAN:"uk",URDU:"ur",UZBEK:"uz",UIGHUR:"ug",VIETNAMESE:"vi",WELSH:"cy",YIDDISH:"yi",YORUBA:"yo",UNKNOWN:""};
    u("google.language.Languages",google.language.f);
    var w={AMHARIC:"am",ARMENIAN:"hy",AZERBAIJANI:"az",BASQUE:"eu",BENGALI:"bn",BIHARI:"bh",BRETON:"br",BURMESE:"my",CHEROKEE:"chr",CORSICAN:"co",DHIVEHI:"dv",ESPERANTO:"eo",FAROESE:"fo",FRISIAN:"fy",GEORGIAN:"ka",GUJARATI:"gu",INUKTITUT:"iu",JAVANESE:"jw",KANNADA:"kn",KAZAKH:"kk",KHMER:"km",KURDISH:"ku",KYRGYZ:"ky",LAO:"lo",LAOTHIAN:"lo",LATIN:"la",LUXEMBOURGISH:"lb",MALAYALAM:"ml",MAORI:"mi",MARATHI:"mr",MONGOLIAN:"mn",NEPALI:"ne",OCCITAN:"oc",ORIYA:"or",PASHTO:"ps",PUNJABI:"pa",QUECHUA:"qu",SANSKRIT:"sa",
    SCOTS_GAELIC:"gd",SINDHI:"sd",SINHALESE:"si",SUNDANESE:"su",SYRIAC:"syr",TAJIK:"tg",TAMIL:"ta",TATAR:"tt",TELUGU:"te",TIBETAN:"bo",TONGA:"to",UIGHUR:"ug",URDU:"ur",UZBEK:"uz",YORUBA:"yo"},x={},y={},z=100;function A(a,c){var d="id"+z++;y[d]=function(e){e=c(e);a(e);delete y[d]};return"google.language.callbacks."+d}function B(a,c){var d="id"+z++;y[d]=function(e,f,g,H,I){e=c(e,f,g,H,I);a(e);delete y[d]};return"google.language.callbacks."+d}google.language.o=function(a){return x[a]};
    u("google.language.isTranslatable",google.language.o);for(var C in google.language.f)x[google.language.f[C]]=!0;for(C in w)x[w[C]]=!1;google_exportSymbol("google.language.callbacks",y);
    google_exportSymbol("google.language.getBranding",function(a,c){var d="horizontal";c&&c.type&&(d=c.orientation);var e=b["powered-by"],f=google.loader.ServiceBase+"/css/small-logo"+(r&&!t?".gif":".png");c=['<div style="font-family:arial,sans-serif;','font-size:11px;margin-bottom:1px" class="gBrandingText">',e,'</div><div><img src="',f,'"/></div>'];e=['<span style="vertical-align:middle;font-family:arial,sans-serif;','font-size:11px;" class="gBrandingText">',e,'<img style="padding-left:1px;vertical-align:',
    r?'bottom;" ':'middle;" ','src="',f,'"/></span>'];e="horizontal"==d?e:c;f=e.join("");d=document.createElement("div");d.className="gBranding";d.style.color="#676767";e==c&&(d.style.textAlign="center");d.innerHTML=f;a&&(a="string"==typeof a?document.getElementById(a):a)&&a.appendChild&&a.appendChild(d);return d});google_exportSymbol("google.language.HORIZONTAL_BRANDING","horizontal");google_exportSymbol("google.language.VERTICAL_BRANDING","vertical");
    google_exportSymbol("google.language.CurrentLocale",_UDS_CONST_LOCALE);google_exportSymbol("google.language.ShortDatePattern",_UDS_CONST_SHORT_DATE_PATTERN);google.language.s=function(a,c,d){c="http://www.google.com/complete/search"+("?json=t&jsonp="+A(c,D)+"&client=uds");d&&(c+="&hl="+encodeURIComponent(d));c+="&q="+encodeURIComponent(a);_json_request_require_prep=!1;k(c,null);_json_request_require_prep=!0};u("google.language.suggest",google.language.s);
    function D(a){var c={};c.query=a[0];c.suggestions=[];var d=a[1];a=a[2];for(var e=0;e<d.length;e++){var f={};f.name=d[e];f.count=parseInt(a[e].replace(",",""),10);f.results=a[e];c.suggestions.push(f)}return c};google.language.h={TEXT:"text",HTML:"html"};u("google.language.ContentType",google.language.h);
    google.language.translate=function(a,c,d,e){var f=null;if("string"==typeof a)var g=a;else if(a.text&&a.type)g=a.text,f=a.type;else throw"Invalid first argument";5120>=g.length?a=!1:(a=E(null,null,400,"the string to be translated exceeds the maximum length allowed",null),e(a),a=!0);a||(e=B(e,E),c=c+"|"+d,d=google.loader.ServiceBase+"/Gtranslate?callback="+e,d=d+"&context=22"+("&q="+encodeURIComponent(g)),d+="&langpair="+encodeURIComponent(c),f&&(d+="&format="+encodeURIComponent(f)),k(d,google.language.Version))};
    u("google.language.translate",google.language.translate);function E(a,c,d,e){a={};a.status={code:d};e&&(a.status.message=e);200!=d?(a.error=a.status,a.translation=""):(a.translation=c.translatedText,c.detectedSourceLanguage&&(a.detectedSourceLanguage=c.detectedSourceLanguage));return a}google.language.l=function(a,c){c=B(c,F);c=google.loader.ServiceBase+"/GlangDetect?callback="+c;c=c+"&context=22"+("&q="+encodeURIComponent(a));k(c,google.language.Version)};u("google.language.detect",google.language.l);
    function F(a,c,d,e){a={};a.status={code:d};e&&(a.status.message=e);200!=d?(a.error=a.status,a.language=""):(a.language=c.language,a.isReliable=c.isReliable,a.confidence=c.confidence);return a};var G={"en|am":!0,"en|ar":!0,"en|bn":!0,"en|el":!0,"en|fa":!0,"en|gu":!0,"en|hi":!0,"en|kn":!0,"en|ml":!0,"en|mr":!0,"en|ne":!0,"en|or":!0,"en|pa":!0,"en|ru":!0,"en|sa":!0,"en|si":!0,"en|sr":!0,"en|ta":!0,"en|te":!0,"en|ti":!0,"en|ur":!0,"en|zh":!0};
    google.language.u=function(a,c,d,e){if("function"!=typeof e)throw"Invalid callback";if(J(a,c,d,e)){e=B(e,K);c=[google.loader.ServiceBase,"/Gtransliterate?callback=",e,"&context=22","&langpair=",encodeURIComponent(c+"|"+d)];for(d=0;d<a.length;d++)c.push("&q="),c.push(encodeURIComponent(a[d]));k(c.join(""),google.language.Version)}};u("google.language.transliterate",google.language.u);
    function J(a,c,d,e){var f="";"object"==typeof a&&a.length?1>a.length?f="No words to transliterate.":5<a.length?f="Number of words to transliterate exceeds the limit of 5":c?d?c&&d&&G[c+"|"+d]||(f="Transliteration not supported for the language pair. Source Language - "+c+" Destination Language - "+d+"."):f="Destination language not specified.":f="Source language not specified.":f="Words needs to be an array.";if(0<f.length){var g=K(null,null,400,f,null);window.setTimeout(function(){e(g)},0);return!1}return!0}
    function K(a,c,d,e){a={status:{code:d,message:e}};200!=d?(a.error=a.status,a.transliterations=[]):a.transliterations=c.transliterations;return a};var L={hi:!0,kn:!0,ml:!0,ta:!0,te:!0};google.language.c={j:0,i:1,g:2};google.language.m=function(a){a=a.toLowerCase();return a in L?M(a):google.language.c.g};u("google.language.FontRenderingStatus.SUPPORTED",google.language.c.i);u("google.language.FontRenderingStatus.UNSUPPORTED",google.language.c.j);u("google.language.FontRenderingStatus.UNKNOWN",google.language.c.g);u("google.language.isFontRenderingSupported",google.language.m);
    function M(a){switch(a){case "ml":return a=[],a.push({a:"\u0d23\u0d28\u0d4d\u200d",b:"\u0d23\u0d4d\u0d23\u0d28\u0d4d\u0d31"}),a.push({a:"\u0d23\u0d28\u0d4d\u200d",b:"\u0d23\u0d4d\u0d23\u0d28\u0d4d\u200d\u0d31"}),N(a);case "hi":return N([{a:"\u0915\u094d\u0930\u0930\u094d\u0925",b:"\u0915\u0925"}]);case "kn":return N([{a:"\u0c95\u0ccd\u0cb2",b:"\u0c95"}]);case "te":return N([{a:"\u0c15\u0c4d\u0c32",b:"\u0c15"}]);case "ta":return N([{a:"\u0b95\u0bcd",b:"\u0b95"}])}}
    function N(a){for(var c=0;c<a.length;c++){var d=a[c],e=d.a,f=d.b;d=document.createElement("span");d.style.fontSize="10px";var g=d.style;"opacity"in g?g.opacity=.1:"MozOpacity"in g?g.MozOpacity=.1:"filter"in g&&(g.filter="alpha(opacity=10)");document.body.appendChild(d);d.innerHTML=e;e=O(d).width;d.innerHTML=f;f=O(d).width;document.body.removeChild(d);if(e==f)return!0}return!1}
    function O(a){if("none"!=a.style.display)return{width:a.offsetWidth,height:a.offsetHeight};var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="";var g=a.offsetWidth;a=a.offsetHeight;c.display=d;c.position=f;c.visibility=e;return{width:g,height:a}};
    google.loader.loaded({"module":"language","version":"1.0","components":["default"]});
    google.loader.eval.language = function() {eval(arguments[0]);};if (google.loader.eval.scripts && google.loader.eval.scripts['language']) {(function() {var scripts = google.loader.eval.scripts['language'];for (var i = 0; i < scripts.length; i++) {google.loader.eval.language(scripts[i]);}})();google.loader.eval.scripts['language'] = null;}})();