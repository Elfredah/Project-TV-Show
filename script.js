function setup() {
  const allEpisodes = getAllEpisodes(); // Assuming this function returns an array of episode objects
  makePageForEpisodes(allEpisodes);
}

function makePageForEpisodes(episodeList) {
  const rootElem = document.getElementById("root");

  // Display the total number of episodes
  rootElem.textContent = `Got ${episodeList.length} episode(s)`;

  // Create a container for episodes
  const episodesContainer = document.createElement("div");
  episodesContainer.classList.add("episodes-container");

  // Loop through each episode and create a new section for it
  episodeList.forEach((episode) => {
    const episodeElem = document.createElement("div");
    episodeElem.classList.add("episode");

    // Episode title (Name and Season + Episode number)
    const titleElem = document.createElement("h2");
    titleElem.textContent = `${episode.name} - S${episode.season}E${episode.number}`;
    episodeElem.appendChild(titleElem);

    // Airdate and airtime
    const airdateElem = document.createElement("p");
    airdateElem.textContent = `Aired on: ${episode.airdate} at ${episode.airtime}`;
    episodeElem.appendChild(airdateElem);

    // Episode summary
    const summaryElem = document.createElement("p");
    summaryElem.innerHTML = episode.summary;
    episodeElem.appendChild(summaryElem);

    // Episode image (if available)
    if (episode.image && episode.image.medium) {
      const imageElem = document.createElement("img");
      imageElem.src = episode.image.medium;
      imageElem.alt = `Image for ${episode.name}`;
      episodeElem.appendChild(imageElem);
    }

    // Link to episode page (optional)
    const linkElem = document.createElement("a");
    linkElem.href = episode.url;
    linkElem.textContent = "More info";
    episodeElem.appendChild(linkElem);

    // Append the episode element to the container
    episodesContainer.appendChild(episodeElem);
  });

  // Append the episodes container to the root element
  rootElem.appendChild(episodesContainer);
}

window.onload = setup;
