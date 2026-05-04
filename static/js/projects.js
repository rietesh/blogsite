document.addEventListener("DOMContentLoaded", () => {
    fetch("projects.json")
        .then(response => response.json())
        .then(projects => {
            const paginatedList = document.getElementById("paginated-list");
            // If paginated-list is not found (e.g. on thankyou.html), look for #two .row
            const container = paginatedList || document.querySelector("#two .row");
            
            if (!container) return;
            
            projects.forEach(project => {
                const article = document.createElement("article");
                article.className = "6u 12u$(xsmall) work-item";
                article.innerHTML = `
                    <a href="${project.link}" target="_blank"><img style="width:100%" src="${project.image}" alt="" /></a>
                    <a href="${project.link}" target="_blank"><h3>${project.title}</h3></a>
                `;
                
                const paginationNav = container.querySelector(".pagination-container");
                if (paginationNav) {
                    container.insertBefore(article, paginationNav);
                } else {
                    container.appendChild(article);
                }
            });

            if (typeof initPagination === 'function') {
                initPagination();
            }
        })
        .catch(error => console.error("Error loading projects:", error));
});
