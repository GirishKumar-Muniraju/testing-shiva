
setMonthYearAmount(inputData, formData, dhs0064m);
--------------------------------------
public static void setMonthYearAmount(Map<String, String> inputData, FormData formData, Dhs0064m dhs0064m){
	
	Map<String, String> monthMap  = getMonthsMap();
	Map<String, String> amountMap  = getAmountMap();
	StringBuilder str = new StringBuilder();
	
	for(int k=1;k<=12;k++){
		String monthValue = getStringFromInputData(inputData,
		monthMap.get((new Interger(k)).toString().trim());
		
		String amountValue = getStringFromInputData(inputData,
		amountMap.get((new Interger(k)).toString().trim());
	
		if(amountValue) != null){
			str.append("$");
			str.append(amountValue + " for ");
		}
		if(monthValue) != null){
			str.append(" ");
			str.append(monthValue + ", ");
		}
	}
	dhs0064m.setFamiliesFirstMonthYearAmount(str);	
}

public static Map<String, String> getMonthsMap() {
	Map<String, String> monthMap  = new HashMap<String, String>() {{
		put("1", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_1");
		put("2", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_2");
		
		put("3", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_3");
		put("4", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_4");
	
		put("5", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_5");
		put("6", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_6");
	
		put("7", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_7");
		put("8", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_8");
		
		put("9", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_9");
		put("10", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_10");
		
		put("11", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_11");
		put("12", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_MONTH_12");
	}};

	return monthMap;
}

public static Map<String, String> getAmountMap() {
	Map<String, String> amountMap  = new HashMap<String, String>() {{
		put("1", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_1");
		put("2", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_2");
		
		put("3", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_3");
		put("4", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_4");
		
		put("5", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_5");
		put("6", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_6");
		
		put("7", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_7");
		put("8", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_8");
		
		put("9", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_9");
		put("10", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_10");
		
		put("11", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_11");
		put("12", "CoConstants.NUMBER_OF_FAMILIES_FIRST_BENITS_AMOUNT_12");
	}};

	return amountMap;
}


public static String getStringFromInputData(Map<String, String> inputData,String key) {
	if(inputData.get(key) != null ){
		return inputData.get(key);
	}
	return null;
}
 