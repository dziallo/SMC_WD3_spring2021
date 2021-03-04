

document.onscroll = function(){ 

  const fadeRate = 10.0;
  const minOpacity = 0.1;

  let percentage = getVerticalScrollPercentage(document.body)
  let invPercentage = Math.max(1.0 - fadeRate * percentage, minOpacity);

  let draculaNode = document.getElementById("header-dracula");
  draculaNode.style.opacity = invPercentage
}

function getVerticalScrollPercentage( elm ){
  let p = elm.parentNode
  return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight )
}


/*

document is the global object that represents the entire webpage

const variables are only allocated once and cannot be modifed (performance boost at the cost of not modifying it later)


*/
