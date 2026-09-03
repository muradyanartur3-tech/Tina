const listings = [
  {
    title: "3-սենյականոց, Կենտրոն",
    area: "95 մ²",
    floor: "4-րդ հարկ",
    price: "$185,000",
    type: "apartment",
    deal: "sale",
    status: "available"
  },
  {
    title: "Առանձնատուն, Ծաղկաձոր",
    area: "220 մ²",
    floor: "3 հարկ",
    price: "$340,000",
    type: "house",
    deal: "sale",
    status: "sold"
  },
  {
    title: "2-սենյականոց, Արաբկիր",
    area: "62 մ²",
    floor: "2-րդ հարկ",
    price: "$450 / ամիս",
    type: "apartment",
    deal: "rent",
    status: "rented",
    rentedUntil: "2026-12-01"
  }
];

function getStatusBadge(item) {
  if (item.status === "sold") {
    return { label: "Վաճառված", className: "badge-sold" };
  }
  if (item.status === "rented") {
    const until = item.rentedUntil
      ? new Date(item.rentedUntil).toLocaleDateString("hy-AM", { year: "numeric", month: "long", day: "numeric" })
      : null;
    return {
      label: until ? `Վարձակալված մինչև ${until}` : "Վարձակալված",
      className: "badge-rented"
    };
  }
  return { label: "Հասանելի", className: "badge-available" };
}

function renderListings(items) {
  const grid = document.getElementById("hot-listings-grid");
  grid.innerHTML = items.map(item => {
    const badge = getStatusBadge(item);
    return `
    <div class="listing-card">
      <div class="thumb">
        նկար
        <span class="status-badge ${badge.className}">${badge.label}</span>
      </div>
      <div class="info">
        <div class="title">${item.title}</div>
        <div class="meta">${item.area} &middot; ${item.floor}</div>
        <div class="price">${item.price}</div>
      </div>
    </div>
  `;
  }).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  renderListings(listings);
});
