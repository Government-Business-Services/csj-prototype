var dept = [
  "Attorney General's Office"
  'Crown Prosecution Service'
  'Government Legal Department'
  "Serious Fraud Office"
  "HM Crown Prosecution Service"
  "Inspectorate"
  "Cabinet Office"
  "Crown Commercial Service"
  "Government Property Agency"
  "Civil Service Commission"
  "Equality and Human Rights Commission"
  "Advisory Committee on Business Appointments"
  "Boundary Commission for England"
  "Boundary Commission for Wales"
  "Committee on Standards in Public Life"
  "House of Lords Appointments Commission"
  "Security Vetting Appeals Panel"
  "Senior Salaries Review Body"
  "Commissioner for Public Appointments"
  "Government Equalities Office"
  "Government Estates Management"
  "HM Land Registry"
  "Ofgem"
  "Companies House"
  "The Insolvency Service"
  "Intellectual Property Office"
  "Met Office"
  "UK Space Agency"
  "Department for Digital, Culture, Media & Sport"
  "The National Archives"
  "Arts Council England"
  "Environment Agency"
  "Department for International Trade"
  "Driver and Vehicle Licensing Agency"
  "HM Land Registry"
  "HM Revenue & Customs"
  ]
  var element = document.querySelector('#dept')
  var id = 'autocomplete-default'
  accessibleAutocomplete({element: element, id: id, source: dept})
