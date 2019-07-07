console.log('The color is green.');
var link = document.createElement('link');
link.setAttribute(
  'href',
  'https://fonts.googleapis.com/css?family=Bree+Serif|Open+Sans|Literata&display=swap'
);
link.setAttribute('rel', 'stylesheet');
document.getElementsByTagName('head')[0].appendChild(link);