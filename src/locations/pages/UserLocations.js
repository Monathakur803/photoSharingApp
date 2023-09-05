import React from "react";
import { useParams } from "react-router-dom";

import LocationsList from "../components/LocationsList";

const UserLocations = () => {
    const USER_LOCATIONS = [
        {
            id: "loc1",
            title: "Red Fort",
            desc: "लाल किला मुगल साम्राज्यक लगभग २०० वर्ष, सन् १८५७ धरि निवासस्थल छल । ई भारतक राजधानी नयाँ दिल्ली सँ सटल पुरानी दिल्ली सहरमे स्थित अछि । एकर लाल रङ्गक कारण एकरा लाल किला कहल जाइत अछि । ई युनेस्को विश्व धरोहर स्थलमे सूचिकृत अछि ",
            pic: "https://e0.pxfuel.com/wallpapers/941/189/desktop-wallpaper-red-fort.jpg",
            address: "Netaji Subhash Marg · 011 2327 7705",
            userid: "u1",
        },
        {
            id: "loc2",
            title: "Taj Mahal",
            desc: "ताज महल   भारतक आगरा सहरमे स्थित एक समाधिस्थल छी । एकर निर्माण मुगल सम्राट शाहजहाँ, अपन घरवाली मुमताज महलक यादमे करेनाए छल ।[५] ताज महल मुगल वास्तुकलाक उत्कृष्ट नमूना छी । एकर वास्तुकला शैली फारसी, टर्की, भारतीय तथा इस्लामिक वास्तुकलाक घटकसभक अनौठा मिश्रण छी । सन् १९८३ मे, ताजमहल युनेस्को विश्व सम्पदा क्षेत्र बनल ।",
            pic: "https://dreamcitytravel.com/wp-content/uploads/2020/08/3.-Taj-Mahal-Location-Image.png",
            address: "Agra",
            userid: "u1",
        },
        {
            id: "loc1",
            title: "Jatayu Park",
            desc: "जटायु अर्थ सेंटर, जिसे जटायु नेचर पार्क या जटायु रॉक के नाम से भी जाना जाता है, केरल के कोल्लम के चदयामंगलम में एक पार्क और पर्यटन केंद्र है। यह समुद्र तल से 350 मीटर (1200 फीट) की ऊंचाई पर स्थित है। जटायु नेचर पार्क को दुनिया की सबसे बड़ी पक्षी मूर्ति होने का गौरव प्राप्त है, जो जटायु की है।",
            pic: "https://qph.cf2.quoracdn.net/main-qimg-8924a2a1094b74f75368149b3babc98c",
            address: "Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
            userid: "u2",
       
        },
    ];
    const userid = useParams().userid;
    const FILTERED_LOCATIONS = USER_LOCATIONS.filter(
        (location) => location.userid === userid
    );
    return <LocationsList items={FILTERED_LOCATIONS} />;
};

export default UserLocations;