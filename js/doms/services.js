function getAllServices() {
  return $("#services_list_container").children()
}

function toggleVisibility($element) {
  $element.toggleClass('active_desc').toggleClass("d-none")
}

function switchDescription(service) {
  toggleVisibility($(".active_desc"))
  var serviceSuffix = $(service).attr("id").slice(-1)
  toggleVisibility($("#desc_for_service_" + serviceSuffix))
}

function addListenersToServices(services){
  services.each(function (index, service){
    $(service).click(function(){
      switchDescription(service)
    })
  })
}

function goToHashServiceDesc() {
  var hashService = window.location.hash
  if(!hashService) return
  var serviceSuffix = hashService.slice(-1)
  var newActiveSurvice = $("#service_" + serviceSuffix)
  switchDescription(newActiveSurvice)
}

function addHashListener() {
  $(window).on("hashchange", goToHashServiceDesc)
}

function main() {
  goToHashServiceDesc()
  addHashListener()
  var services = getAllServices()
  addListenersToServices(services)
}


$(document).ready(main)
