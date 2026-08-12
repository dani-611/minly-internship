1.  Postman done ready for review
2.                         1-
          .set the "Content-Type" in the headers to "application/json"
          .when sending the array of movies, use JSON.stringify(movies)

          2-
          .url is extracted from the request
          .the url is stored in a URL object
          .extract the pathname using the .pathname method
          .turn the pathname into segments by splitting them every "/"
          .check on segment[1] if it is one of the allowed paths

          3-
          .url is extracted from the request
          .the url is stored in a URL object
          .extract the pathname using the .pathname method
          .turn the pathname into segments by splitting them every "/"
          .parse segment[2] to Int
          .if it is an Int, fetch the movie

          4-
          .check the movies array if it contains a movie with id similar to the parsed segment[2]

          5-
          .if the parsed segment is NaN, then it is invalid
          .it is not 404 as this way of passing parameters is not allowed so we use 400
          .If it is not found, then we can use 404 just like case 4

          6-
          .method is extracted from the request
          .check on the method and do the suitable action for it

3.  1- opened w3schools.com and around 66 requests
    2- a post request "consent-require-renewal" was made with 200 Ok status
    The payload:
    {
    "domainUid": "849c868d-5fd6-58f9-8963-b1468ae3b279",
    "jurisdiction": "tcfeuv2",
    "fgc": false,
    "publisherCountryCode": "NO",
    "tcString": "",
    "addtlConsent": "",
    "target": "...",
    "forceRenewAfterDate": "",
    "storedAbId": "",
    "excludedIABVendors": [],
    "excludedGoogleVendors": []
    }

               The response:

        {
        "country": {
        "code": "EG",
        "name": "Egypt"
        },
        "jurisdiction": "tcfeuv2",
        "gdprApplies": false,
        "config": {
        "options": {
        "appearance": {
        "theme": {
        "colors": {
        "text": {
        "link": "#3440c9",
        "linkHover": "#3440c9",
        "onSecondary": "#929292",
        "onSecondaryHover": "#929292",
        "onSecondaryActive": "#929292",
        "onTertiary": "#3440c9",
        "onTertiaryHover": "#3440c9",
        "onTertiaryActive": "#3440c9",
        "onQuaternary": "#3440c9",
        "onQuaternaryHover": "#3440c9",
        "onQuaternaryActive": "#3440c9"
        },
        "background": {
        "body": "#ffffff",
        "primary": "#3440c9",
        "primaryHover": "#3440c9",
        "primaryActive": "#3440c9",
        "secondary": "transparent",
        "secondaryHover": "transparent",
        "secondaryActive": "transparent",
        "tertiary": "transparent",
        "tertiaryHover": "transparent",
        "tertiaryActive": "transparent",
        "quaternary": "#f4f4f4",
        "quaternaryHover": "#f4f4f4",
        "quaternaryActive": "#f4f4f4"
        },
        "border": {
        "primary": "#3440c9",
        "primaryHover": "#3440c9",
        "primaryActive": "#3440c9",
        "secondary": "#c7ccd3",
        "secondaryHover": "#c7ccd3",
        "secondaryActive": "#c7ccd3",
        "tertiary": "#3440c9",
        "tertiaryHover": "#3440c9",
        "tertiaryActive": "#3440c9",
        "quaternary": "transparent",
        "quaternaryHover": "#3440c9",
        "quaternaryActive": "#3440c9",
        "header": "transparent"
        }
        },
        "typography": {
        "align": {
        "h1": "left"
        },
        "size": {
        "h1": "14px"
        },
        "weight": {
        "h1": "400",
        "h1Bold": "400"
        }
        }
        },
        "views": {
        "tcfConsent": {
        "layout": {
        "refuseButtonAlignment": "left",
        "template": "external-decline",
        "refuseButtonSize": "thin"
        }
        }
        }
        }
        },
        "ab_tests": [
        {
        "id": "55ad1bd69f-abNegation_A_100",
        "slug": "abNegation",
        "effects": {
        "styles": {
        "iframe": ""
        }
        },
        "idActirise": "abNegation_A_100",
        "end_date": "01-25-2030"
        }
        ],
        "configSource": "file",
        "styles": {
        "root": "",
        "iframe": ""
        },
        "gvl": {
        "vendorListVersion": 171,
        "tcfPolicyVersion": 5,
        "vendorCount": 1733
        }
        },
        "renew": false,
        "automated": null
        }
        3-
        Request URL
        https://eu.fastcmp.com/consent-require-renewal?_profile=stub-2
        Request Method
        POST
        Status Code
        200 OK
        Remote Address
        104.18.8.229:443
        Referrer Policy
        strict-origin-when-cross-origin

        access-control-allow-origin \*
        cache-control
        no-cache
        cf-cache-status
        DYNAMIC
        cf-ray
        a29dd7ebdba30d4b-MRS
        content-encoding
        br
        content-type
        application/json; charset=utf-8
        date
        Wed, 12 Aug 2026 07:42:27 GMT
        server
        cloudflare
        vary
        Accept-Encoding

        :authority

        eu.fastcmp.com
        :method
        POST
        :path
        /consent-require-renewal?\_profile=stub-2
        :scheme
        https
        accept
        _/_
        accept-encoding
        gzip, deflate, br, zstd
        accept-language
        en-US,en;q=0.9
        content-length
        3013
        content-type
        application/json
        origin
        https://www.w3schools.com
        prefer
        profile="stub/2"
        priority
        u=1, i
        referer
        https://www.w3schools.com/
        sec-ch-ua
        "Not=A?Brand";v="99", "Google Chrome";v="151", "Chromium";v="151"
        sec-ch-ua-mobile
        ?0
        sec-ch-ua-platform
        "macOS"
        sec-fetch-dest
        empty
        sec-fetch-mode
        cors
        sec-fetch-site
        cross-site
        user-agent
        Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/151.0.0.0 Safari/537.36

day3-extension: Done
