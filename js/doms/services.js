function getAllServices() {
  return $("#services_list_container").children()
}

function toggleVisibility($element) {
  $element.toggleClass('active_desc').toggleClass("d-none")
}

function serviceOnClick(service) {
  toggleVisibility($(".active_desc"))
  var serviceSuffix = $(service).attr("id").slice(-1)
  toggleVisibility($("#desc_for_service_" + serviceSuffix))
}

function addListenersToServices(services){
  services.each(function (index, service){
    $(service).click(function(){
      serviceOnClick(service)
    })
  })
}

function main() {
  var services = getAllServices()
  addListenersToServices(services)
}


$(document).ready(main)
