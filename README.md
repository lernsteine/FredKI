# FredKI

**Open-source AI agent platform for learning platforms such as Moodle – maintained by [lernsteine.com](https://lernsteine.com).**

FredKI is free software under the GNU GPL v3. You can self-host it without payment or limits (see [Quick start](#quick-start)), or use the hosted FredKI service by lernsteine.com.

FredKI is based on [MaxKB](https://github.com/1Panel-dev/MaxKB) by FIT2CLOUD / 1Panel. Many thanks to the MaxKB team.

---

## What FredKI does

FredKI lets you build AI agents that answer questions based on your own content, for example your course material.

- **Knowledge bases (RAG)**: upload documents or crawl web pages. FredKI splits and indexes them automatically, so answers stay close to your material and hallucinations are reduced.
- **Agent workflows**: a workflow engine, function library and MCP tool use for multi-step AI processes.
- **Easy integration**: embed agents into other systems without coding, or connect them through the API.
- **Model-agnostic**: works with self-hosted models (such as Llama, Qwen, Gemma or DeepSeek) and with public models (such as OpenAI, Claude or Gemini).
- **Multimodal**: text, image, audio and video as input and output.

## Moodle plugins for FredKI

| Plugin | Purpose |
| --- | --- |
| [FredKI course data](https://github.com/lernsteine/moodle-mod_fredkicourseimport) | Syncs Moodle course content into a FredKI knowledge base |
| [FredKI Chat](https://github.com/lernsteine/moodle-local_fredkichat) | Moodle-styled, streaming chat for FredKI agents |
| [FredKI Flex Agent](https://github.com/lernsteine/moodle-block_fredkiflexagent) | Lets teachers choose a FredKI agent per course |

All plugins work with any FredKI server: self-hosted from this repository or the hosted service by lernsteine.com.

## Quick start

FredKI runs as a Docker container. Start it with:

```bash
docker run -d --name=maxkb --restart=always -p 8080:8080 -v ~/.maxkb:/opt/maxkb 1panel/maxkb
```

The command uses the official MaxKB image, on which FredKI is based. Then open `http://your_server_ip:8080` and log in with the default administrator account:

- username: `admin`
- password: `MaxKB@123..`

Change the password after the first login. For production use, put the server behind HTTPS, because the Moodle plugins only connect to HTTPS URLs.

## Technical stack

- Frontend: [Vue.js](https://vuejs.org/)
- Backend: [Python / Django](https://www.djangoproject.com/)
- LLM framework: [LangChain](https://www.langchain.com/)
- Database: [PostgreSQL + pgvector](https://www.postgresql.org/)

## License

Licensed under the GNU General Public License version 3 (GPLv3) (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

<https://www.gnu.org/licenses/gpl-3.0.html>

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

FredKI is a fork of [MaxKB](https://github.com/1Panel-dev/MaxKB), © FIT2CLOUD. MaxKB is a trademark of its respective owner.
