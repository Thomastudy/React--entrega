import emailjs from "@emailjs/browser";

export const sendEmail = (buyer, total, items) => {
  const formattedItems = items
    .map((item) => `${item.title} (x${item.quantity})`)
    .join(", ");
  const templateParams = {
    name: buyer.name,
    email: buyer.email,
    phone: buyer.phone,
    total: total,
    products: formattedItems,
  };

  console.log(templateParams);
  emailjs
    .send("service_jd6qon8", "template_c8xmuqj", templateParams, {
      publicKey: "2rGYXFhT1hhtvFMYt",
    })
    .then(
      () => {
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
};
