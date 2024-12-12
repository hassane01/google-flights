const data = {
    "id": "10413-2412111630--32677-0-12712-2412111910|12712-2412122130--32677-0-10413-2412131050",
    "price": {
      "raw": 6624.31,
      "formatted": "$6,625",
      "pricingOptionId": "zbeBl5GEMajI"
    },
    "legs": [
      {
        "id": "10413-2412111630--32677-0-12712-2412111910",
        "origin": {
          "id": "CDG",
          "entityId": "95565041",
          "name": "Paris Charles de Gaulle",
          "displayCode": "CDG",
          "city": "Paris",
          "country": "France",
          "isHighlighted": false
        },
        "destination": {
          "id": "JFK",
          "entityId": "95565058",
          "name": "New York John F. Kennedy",
          "displayCode": "JFK",
          "city": "New York",
          "country": "United States",
          "isHighlighted": false
        },
        "durationInMinutes": 520,
        "stopCount": 0,
        "isSmallestStops": false,
        "departure": "2024-12-11T16:30:00",
        "arrival": "2024-12-11T19:10:00",
        "timeDeltaInDays": 0,
        "carriers": {
          "marketing": [
            {
              "id": -32677,
              "alternateId": "AF",
              "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
              "name": "Air France"
            }
          ],
          "operationType": "fully_operated"
        },
        "segments": [
          {
            "id": "10413-12712-2412111630-2412111910--32677",
            "origin": {
              "flightPlaceId": "CDG",
              "displayCode": "CDG",
              "parent": {
                "flightPlaceId": "PARI",
                "displayCode": "PAR",
                "name": "Paris",
                "type": "City"
              },
              "name": "Paris Charles de Gaulle",
              "type": "Airport",
              "country": "France"
            },
            "destination": {
              "flightPlaceId": "JFK",
              "displayCode": "JFK",
              "parent": {
                "flightPlaceId": "NYCA",
                "displayCode": "NYC",
                "name": "New York",
                "type": "City"
              },
              "name": "New York John F. Kennedy",
              "type": "Airport",
              "country": "United States"
            },
            "departure": "2024-12-11T16:30:00",
            "arrival": "2024-12-11T19:10:00",
            "durationInMinutes": 520,
            "flightNumber": "8",
            "marketingCarrier": {
              "id": -32677,
              "name": "Air France",
              "alternateId": "AF",
              "allianceId": 0,
              "displayCode": ""
            },
            "operatingCarrier": {
              "id": -32677,
              "name": "Air France",
              "alternateId": "AF",
              "allianceId": 0,
              "displayCode": ""
            }
          }
        ]
      },
      {
        "id": "12712-2412122130--32677-0-10413-2412131050",
        "origin": {
          "id": "JFK",
          "entityId": "95565058",
          "name": "New York John F. Kennedy",
          "displayCode": "JFK",
          "city": "New York",
          "country": "United States",
          "isHighlighted": false
        },
        "destination": {
          "id": "CDG",
          "entityId": "95565041",
          "name": "Paris Charles de Gaulle",
          "displayCode": "CDG",
          "city": "Paris",
          "country": "France",
          "isHighlighted": false
        },
        "durationInMinutes": 440,
        "stopCount": 0,
        "isSmallestStops": false,
        "departure": "2024-12-12T21:30:00",
        "arrival": "2024-12-13T10:50:00",
        "timeDeltaInDays": 1,
        "carriers": {
          "marketing": [
            {
              "id": -32677,
              "alternateId": "AF",
              "logoUrl": "https://logos.skyscnr.com/images/airlines/favicon/AF.png",
              "name": "Air France"
            }
          ],
          "operationType": "fully_operated"
        },
        "segments": [
          {
            "id": "12712-10413-2412122130-2412131050--32677",
            "origin": {
              "flightPlaceId": "JFK",
              "displayCode": "JFK",
              "parent": {
                "flightPlaceId": "NYCA",
                "displayCode": "NYC",
                "name": "New York",
                "type": "City"
              },
              "name": "New York John F. Kennedy",
              "type": "Airport",
              "country": "United States"
            },
            "destination": {
              "flightPlaceId": "CDG",
              "displayCode": "CDG",
              "parent": {
                "flightPlaceId": "PARI",
                "displayCode": "PAR",
                "name": "Paris",
                "type": "City"
              },
              "name": "Paris Charles de Gaulle",
              "type": "Airport",
              "country": "France"
            },
            "departure": "2024-12-12T21:30:00",
            "arrival": "2024-12-13T10:50:00",
            "durationInMinutes": 440,
            "flightNumber": "7",
            "marketingCarrier": {
              "id": -32677,
              "name": "Air France",
              "alternateId": "AF",
              "allianceId": 0,
              "displayCode": ""
            },
            "operatingCarrier": {
              "id": -32677,
              "name": "Air France",
              "alternateId": "AF",
              "allianceId": 0,
              "displayCode": ""
            }
          }
        ]
      }
    ],
    "isSelfTransfer": false,
    "isProtectedSelfTransfer": false,
    "farePolicy": {
      "isChangeAllowed": false,
      "isPartiallyChangeable": false,
      "isCancellationAllowed": false,
      "isPartiallyRefundable": false
    },
    "fareAttributes": {},
    "isMashUp": false,
    "hasFlexibleOptions": false,
    "score": 0.999
  }