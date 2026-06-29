let leads = JSON.parse(localStorage.getItem("leads")) || [];

function saveLead(lead){
  leads.push(lead);
  localStorage.setItem("leads", JSON.stringify(leads));
}

function updateStatus(i,status){
  leads[i].status = status;
  localStorage.setItem("leads", JSON.stringify(leads));
}

function deleteLead(i){
  leads.splice(i,1);
  localStorage.setItem("leads", JSON.stringify(leads));
}
