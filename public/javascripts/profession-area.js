var profession-area = [
  "Analysis",
  "Commercial and procurement",
  "Communications",
  "Counter fraud",
  "Digital, data and technology",
  "Finance"
  ]
  var element = document.querySelector('#profession-area')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: profession-area})
