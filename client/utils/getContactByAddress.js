import contactFactory from "../contactFactory";
import Contact from "../Contact";

const getContactByAddress = async (address) => {
    const contactAddress = await contactFactory.ownerToContact(address);
    if(contactAddress === "0x0000000000000000000000000000000000000000") {
        throw new Error("Контакт с таким адресом не найден");
    }
    console.log("contactAddress: ", contactAddress);
    const contact = Contact(contactAddress);
    const telegram = await contact.telegram();
    console.log("contactTelegram: ", telegram);
    const discord = await contact.discord();
    console.log("contactDiscord: ", discord);
    const desc = await contact.desc();
    console.log("contactDescription: ", desc);
    return {telegram, discord, desc};
};

export default getContactByAddress;

