// Contact form -> mailto
$('#contactForm').addEventListener('submit',e=>{
  e.preventDefault();
  const n=$('#name').value,m=$('#email').value,t=$('#message').value;
  location.href='mailto:borothomaxwell@gmail.com?subject='+encodeURIComponent('Portfolio enquiry from '+n)+'&body='+encodeURIComponent('Name: '+n+'\nEmail: '+m+'\n\nMessage:\n'+t);
});
