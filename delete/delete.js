console.log("hello from DeLete");
document.querySelectorAll('.pb-ad, .cookiePolicy-popup, #surveyContent, .recommendations, header, .pill-list, .article__sections, .share__block, .issue-item__footer-info').forEach((e) => e.parentNode.removeChild(e));
document.querySelectorAll('.col-md-2, .col-sm-2').forEach((e) => e.remove());
document.querySelectorAll('.col-md-8').forEach((e) => { e.classList.remove('col-md-8', 'col-sm-8', 'col-sm-7'); e.classList.add('col-md-12', 'col-sm-12') });
