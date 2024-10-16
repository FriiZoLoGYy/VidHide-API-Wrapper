<img src="https://boostplanet.net/images/Sell.App.gif" align="right" width="40" height="40"/>

# VidHide API Wrapper

> [!NOTE]  
> Because this is a new wrapper for VidHide it currently supports all VidHide API endpoints.

## Requirements

> [!IMPORTANT]  
> -   VidHide API Key ([Get it here](https://vidhide.com/?op=my_account)
> -   npm >=8.3.0
> -   node >=16.0.0

## Installation

> [!IMPORTANT]
> npm i VidHide

## Usage

```javascript
const VidHide = require("vidhide");
const API = new VidHide.API("YOUR_API_KEY");

API.account.getAccountInfo().then((res) => {
	console.log(res); // returns account info
});

API.account.getAccountStats().then((res) => {
	console.log(res);
});
```