String.prototype.GetValue=function(e){e=RegExp("(^|&)"+e+"=([^&]*)(&|$)");e=this.substr(this.indexOf("?")+1).match(e);return null!=e?unescape(e[2]):null};var str=location.href,page=str.GetValue("page"),view=str.GetValue("v"),urllength=homepageurl.length;void 0==page&&(page="1");void 0==view&&(view="full");if(-1!=str.indexOf("search/label")){if(-1!=str.indexOf("?")){var str1=str.split("?")[0],label=str1.substring(urllength+13,str1.length)}else{label=str.substring(urllength+13,str.length)}var textlabel="/-/"+label,textpage=""+label}else{textpage=textlabel=""}function stripHtmlTags(f,e){f=f.replace(/<br.*?>/ig," ");return f.replace(/<.*?>/ig,"").split(/\s+/).slice(0,e-1).join(" ")}function showrecentposts(v){img=[];for(var q=0;q<numposts;q++){var w=v.feed.entry[q],x=w.title.$t,p;if(q==v.feed.entry.length){break}for(var z=0;z<w.link.length;z++){if("alternate"==w.link[z].rel){p=w.link[z].href;break}}for(z=0;z<w.link.length;z++){if("replies"==w.link[z].rel&&"text/html"==w.link[z].type){w.link[z].title.split(" ");break}}if(w.category){for(z=0;z<w.category.length;z++){}}var z=w.published.$t,o=z.split("-")[2].substring(0,2),j=z.split("-")[1],z=z.split("-")[0];postDay=o+"/"+j;s=w="content" in w?w.content.$t:"summary" in w?w.summary.$t:"";var B=-1!=s.indexOf("[harga]")?s.substring(s.indexOf("[harga]")+8,s.indexOf("[/harga]")):"";var i=-1!=s.indexOf("[asumsi]")?s.substring(s.indexOf("[asumsi]")+7,s.indexOf("[/asumsi]")):"";newz=s.substring(s.indexOf("[newz]")+8,s.indexOf("[/newz]"));asumsinilai=i.replace(/,/gi,"");nilaiharga=B.replace(/,/gi,"");if(-1!=s.indexOf("[asumsi]")){var A=parseInt(asumsinilai)-parseInt(nilaiharga),t=A/parseInt(asumsinilai),u=t*100,r=u.toFixed(0)+"%",y='<span class="discount-label discount-label--green">-'+r+"</span>"}else{y=""}a=s.indexOf("<img");b=s.indexOf('src="',a);c=s.indexOf('"',b+5);d=s.substr(b+5,c-b-5);img[q]=-1!=a&&-1!=b&&-1!=c&&""!=d?d:"http://bit.ly/hGWr7r";x=-1!=s.indexOf("[harga]")?'<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3"> <div class="ant-single-product simpleCart_shelfItem"> <div class="ant-single-product-image"> <a href="'+p+'"><img src="'+img[q]+'" alt="'+x+'" class="img-responsive center-block item_thumb" /></a> '+y+'<form class="hover-icons hidden-sm hidden-xs variants form-nut-grid form-ajaxtocart"> <a class="button ajax_addtocart add_to_cart item_add" href="javascript:void(0);" title="Mua ngay"></a> <a class="add-to-cart quick-view quickview" href="'+p+'" title="Xem nhanh"></a> </form> </div> <div class="ant-product-border"> <h3 class="product-title"><a href="'+p+'" title="'+x+'" class = "item_name">'+x+'</a></h3> <div class="product-price"> <span class="price item_price">'+B+'</span> <span class="price-before-discount">'+i+"</span> </div> </div> </div> </div>":'<div class="col-md-12 col-sm-12 col-xs-12 clearfix"> <article class="blog-item"> <div class="blog-item-thumbnail"><a href="'+p+'" title="'+x+'"><img src="'+img[q]+'" alt="'+x+'" class="img-responsive center-block" /></a></div> <div class="blog-item-mains"> <h3 class="blog-item-name"><a href="'+p+'" title="'+x+'">'+x+'</a></h3> <div class="post-time"><i class="fa fa-user" aria-hidden="true"></i> Khôi Ròm | <i class="fa fa-calendar"></i> '+postDay+'</div> <p class="blog-item-summary margin-bottom-5">'+removeHtmlTag(newz,230)+"...</p> </div> </article> </div>";document.write(x)}document.write('<div class="clear"></div>')}function numberOfPosts(e){document.write('<script style="text/javascript">var totalPosts= '+e.feed.openSearch$totalResults.$t+" ;<\/script>")}document.write('<script src="/feeds/posts/default'+textlabel+'?alt=json-in-script&callback=numberOfPosts"><\/script>');