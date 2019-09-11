/* eslint-disable no-unused-vars */

export const gefaehrdungen = [
    {
        value: 0,
        text: "Biologische Gefährdung",
        link: "biologisch"
    },
    {
        value: 1,
        text: "Chemische Gefährdung",
        link: "chemisch"
    },
    {
        value: 2,
        text: "Mechanische Gefährdung",
        link: "mechanisch"
    }
];

export function getLink(number) {
    for (const gefaehrdung of gefaehrdungen) {
        if (gefaehrdung.value === number) {
            return gefaehrdung.link;
        }
    }
}


export const handschuhlaenge = {
    short: {
        title: "kurze Länge",
        description: "max. 230mm",
        text: "kurze Länge (max. 230mm)",
        isValid(n) {
            return n <= 230
        }
    },
    medium: {
        title: "mittlere Länge",
        description: "230mm - 260mm",
        text: "mittlere Länge (230mm - 260mm)",
        isValid(n) {
            return 230 <= n && n <= 260
        }
    },
    long: {
        title: "Lange Länge",
        description: "> 260mm",
        text: "Lange Länge (> 260mm)",
        isValid(n) {
            return n > 260
        }
    }
};


export const handschuhstaerke = {
    short: {
        title: "geringe Schichtstärke",
        description: "max. 0,15mm",
        text: "geringe Schichtstärke (max. 0,15mm)",
        isValid(n) {
            return n <= 0.15
        }
    },
    medium: {
        title: "mittlere Schichtstärke",
        description: "0,15mm - 0,5mm",
        text: "mittlere Schichtstärke (0,15mm - 0.5mm)",
        isValid(n) {
            return 0.15 <= n && n <= 0.5
        }
    },
    long: {
        title: "hohe Schichtstärke",
        description: "> 0,5mm",
        text: "hohe Schichtstärke (> 0,5mm)",
        isValid(n) {
            return n > 0.5
        }
    }
};
