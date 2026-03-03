<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-950 font-sans">

    <!-- ── LOGIN ─────────────────────────────────────────────── -->
    <div v-if="!isAuthenticated" class="flex items-center justify-center min-h-screen px-4">
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 w-full max-w-sm">
        <div class="text-center mb-8">
          <h1 class="text-2xl font-bold text-gray-900 dark:text-white">Backoffice</h1>
          <p class="text-gray-500 dark:text-gray-400 text-sm mt-1">Portfolio Admin</p>
        </div>

        <form @submit.prevent="login">
          <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Mot de passe
          </label>
          <input
            v-model="passwordInput"
            type="password"
            placeholder="••••••••"
            class="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 transition"
          />
          <p v-if="loginError" class="text-red-500 text-sm mt-2">Mot de passe incorrect.</p>
          <button
            type="submit"
            class="mt-4 w-full py-3 rounded-xl bg-primary-600 hover:bg-primary-700 text-white font-semibold transition"
          >
            Se connecter
          </button>
        </form>
      </div>
    </div>

    <!-- ── DASHBOARD ─────────────────────────────────────────── -->
    <div v-else>

      <!-- Header -->
      <header class="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-10">
        <div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 class="text-xl font-bold text-gray-900 dark:text-white">Backoffice Projets</h1>
            <p class="text-xs text-gray-500 dark:text-gray-400">{{ projects.length }} projet(s) en ligne</p>
          </div>
          <div class="flex items-center gap-3">
            <a href="/" class="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 transition">
              ← Voir le portfolio
            </a>
            <button
              @click="logout"
              class="px-4 py-2 rounded-xl text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-red-50 hover:text-red-600 transition"
            >
              Déconnexion
            </button>
          </div>
        </div>
      </header>

      <main class="max-w-6xl mx-auto px-6 py-10 grid gap-10 lg:grid-cols-5">

        <!-- ── FORM ADD / EDIT ──────────────────────────────── -->
        <aside class="lg:col-span-2">
          <div class="bg-white dark:bg-gray-800 rounded-2xl shadow p-6 sticky top-24">
            <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-6">
              {{ editingId ? 'Modifier le projet' : 'Ajouter un projet' }}
            </h2>

            <form @submit.prevent="saveProject" class="flex flex-col gap-4">

              <!-- Name -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Nom *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ex: TrustR"
                  class="input-field"
                />
              </div>

              <!-- Description -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Description *</label>
                <textarea
                  v-model="form.description"
                  required
                  rows="3"
                  placeholder="Courte description du projet..."
                  class="input-field resize-none"
                />
              </div>

              <!-- Image URL -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  URL de l'image *
                </label>
                <input
                  v-model="form.image"
                  type="text"
                  required
                  placeholder="https://... ou images/mon-projet.png"
                  class="input-field"
                />
                <!-- Preview -->
                <img
                  v-if="form.image"
                  :src="form.image"
                  class="mt-2 h-24 w-full object-cover rounded-xl border border-gray-200 dark:border-gray-700"
                  @error="e => e.target.style.display='none'"
                />
              </div>

              <!-- Tags -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Technologies <span class="text-gray-400 font-normal">(séparées par des virgules)</span>
                </label>
                <input
                  v-model="form.tagsInput"
                  type="text"
                  placeholder="Vue.js, Laravel, MySQL"
                  class="input-field"
                />
                <div v-if="form.tagsInput" class="flex flex-wrap gap-1 mt-2">
                  <span
                    v-for="(tag, i) in parsedTags"
                    :key="i"
                    class="px-2 py-0.5 text-xs rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300"
                  >{{ tag }}</span>
                </div>
              </div>

              <!-- Code Link -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lien GitHub</label>
                <input
                  v-model="form.code_link"
                  type="url"
                  placeholder="https://github.com/..."
                  class="input-field"
                />
              </div>

              <!-- Demo Link -->
              <div>
                <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Lien Demo</label>
                <input
                  v-model="form.demo_link"
                  type="url"
                  placeholder="https://mon-projet.com"
                  class="input-field"
                />
              </div>

              <!-- Feedback -->
              <p v-if="formError" class="text-red-500 text-sm">{{ formError }}</p>
              <p v-if="formSuccess" class="text-green-600 text-sm">{{ formSuccess }}</p>

              <!-- Buttons -->
              <div class="flex gap-3">
                <button
                  type="submit"
                  :disabled="isSaving"
                  class="flex-1 py-3 rounded-xl bg-primary-600 hover:bg-primary-700 disabled:opacity-60 text-white font-semibold transition"
                >
                  {{ isSaving ? 'Enregistrement...' : (editingId ? 'Mettre à jour' : 'Ajouter') }}
                </button>
                <button
                  v-if="editingId"
                  type="button"
                  @click="cancelEdit"
                  class="px-4 py-3 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
        </aside>

        <!-- ── PROJECT LIST ─────────────────────────────────── -->
        <section class="lg:col-span-3">
          <h2 class="text-lg font-bold text-gray-900 dark:text-white mb-4">Projets en ligne</h2>

          <!-- Loading -->
          <div v-if="isLoading" class="space-y-4">
            <div v-for="n in 4" :key="n" class="h-28 rounded-2xl bg-gray-200 dark:bg-gray-800 animate-pulse"></div>
          </div>

          <!-- Empty state -->
          <div
            v-else-if="projects.length === 0"
            class="text-center py-20 text-gray-400 dark:text-gray-600"
          >
            <p>Aucun projet. Ajoutez-en un !</p>
          </div>

          <!-- List -->
          <ul v-else class="space-y-4">
            <li
              v-for="project in projects"
              :key="project.id"
              class="flex gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow p-4 group hover:shadow-md transition"
            >
              <!-- Thumbnail -->
              <img
                :src="project.image"
                :alt="project.name"
                class="w-24 h-20 object-cover rounded-xl flex-shrink-0 bg-gray-100 dark:bg-gray-700"
                @error="e => e.target.src='https://placehold.co/96x80?text=IMG'"
              />

              <!-- Info -->
              <div class="flex-1 min-w-0">
                <h3 class="font-bold text-gray-900 dark:text-white truncate">{{ project.name }}</h3>
                <p class="text-sm text-gray-500 dark:text-gray-400 line-clamp-2 mt-0.5">{{ project.description }}</p>
                <div class="flex flex-wrap gap-1 mt-2">
                  <span
                    v-for="(tag, i) in (project.tags ?? [])"
                    :key="i"
                    class="px-2 py-0.5 text-xs rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >{{ tag }}</span>
                </div>
              </div>

              <!-- Actions -->
              <div class="flex flex-col gap-2 items-end flex-shrink-0">
                <button
                  @click="startEdit(project)"
                  class="px-3 py-1.5 text-xs rounded-lg bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition"
                >
                  Modifier
                </button>
                <button
                  @click="deleteProject(project.id)"
                  class="px-3 py-1.5 text-xs rounded-lg bg-red-50 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-100 transition"
                >
                  Supprimer
                </button>
                <a
                  v-if="project.demo_link"
                  :href="project.demo_link"
                  target="_blank"
                  class="px-3 py-1.5 text-xs rounded-lg bg-gray-50 dark:bg-gray-700 text-gray-500 dark:text-gray-400 hover:bg-gray-100 transition"
                >
                  Demo ↗
                </a>
              </div>
            </li>
          </ul>
        </section>

      </main>
    </div>

    <!-- Confirm delete modal -->
    <div
      v-if="confirmDeleteId"
      class="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4"
      @click.self="confirmDeleteId = null"
    >
      <div class="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 w-full max-w-sm text-center">
        <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">Supprimer ce projet ?</h3>
        <p class="text-gray-500 dark:text-gray-400 text-sm mb-6">Cette action est irréversible.</p>
        <div class="flex gap-3">
          <button
            @click="confirmDeleteId = null"
            class="flex-1 py-2.5 rounded-xl bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 font-medium hover:bg-gray-200 transition"
          >
            Annuler
          </button>
          <button
            @click="confirmDelete"
            class="flex-1 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium transition"
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { supabase } from '../lib/supabase.js';

// ── AUTH ──────────────────────────────────────────────────────
const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD;
const isAuthenticated = ref(sessionStorage.getItem('admin_auth') === 'true');
const passwordInput = ref('');
const loginError = ref(false);

const login = () => {
  if (passwordInput.value === ADMIN_PASSWORD) {
    isAuthenticated.value = true;
    sessionStorage.setItem('admin_auth', 'true');
    loginError.value = false;
    fetchProjects();
  } else {
    loginError.value = true;
  }
};

const logout = () => {
  sessionStorage.removeItem('admin_auth');
  isAuthenticated.value = false;
  passwordInput.value = '';
};

// ── DATA ──────────────────────────────────────────────────────
const projects = ref([]);
const isLoading = ref(false);

const fetchProjects = async () => {
  isLoading.value = true;
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: true });

  if (!error && data) projects.value = data;
  isLoading.value = false;
};

// ── FORM ──────────────────────────────────────────────────────
const defaultForm = () => ({
  name: '',
  description: '',
  image: '',
  tagsInput: '',
  code_link: '',
  demo_link: ''
});

const form = ref(defaultForm());
const editingId = ref(null);
const isSaving = ref(false);
const formError = ref('');
const formSuccess = ref('');

const parsedTags = computed(() =>
  form.value.tagsInput.split(',').map(t => t.trim()).filter(Boolean)
);

const saveProject = async () => {
  isSaving.value = true;
  formError.value = '';
  formSuccess.value = '';

  const payload = {
    name: form.value.name,
    description: form.value.description,
    image: form.value.image,
    tags: parsedTags.value,
    code_link: form.value.code_link || null,
    demo_link: form.value.demo_link || null
  };

  if (editingId.value) {
    const { error } = await supabase.from('projects').update(payload).eq('id', editingId.value);
    if (error) {
      formError.value = 'Erreur lors de la mise à jour.';
    } else {
      formSuccess.value = 'Projet mis à jour !';
      cancelEdit();
      await fetchProjects();
    }
  } else {
    const { error } = await supabase.from('projects').insert([payload]);
    if (error) {
      formError.value = 'Erreur lors de l\'ajout : ' + error.message;
    } else {
      formSuccess.value = 'Projet ajouté !';
      form.value = defaultForm();
      await fetchProjects();
    }
  }

  isSaving.value = false;
  setTimeout(() => { formSuccess.value = ''; }, 3000);
};

const startEdit = (project) => {
  editingId.value = project.id;
  form.value = {
    name: project.name,
    description: project.description,
    image: project.image,
    tagsInput: (project.tags ?? []).join(', '),
    code_link: project.code_link ?? '',
    demo_link: project.demo_link ?? ''
  };
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

const cancelEdit = () => {
  editingId.value = null;
  form.value = defaultForm();
  formError.value = '';
};

// ── DELETE ────────────────────────────────────────────────────
const confirmDeleteId = ref(null);

const deleteProject = (id) => {
  confirmDeleteId.value = id;
};

const confirmDelete = async () => {
  const { error } = await supabase.from('projects').delete().eq('id', confirmDeleteId.value);
  if (!error) {
    projects.value = projects.value.filter(p => p.id !== confirmDeleteId.value);
  }
  confirmDeleteId.value = null;
};

// ── INIT ──────────────────────────────────────────────────────
onMounted(() => {
  if (isAuthenticated.value) fetchProjects();
});
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700
         bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white text-sm
         focus:outline-none focus:ring-2 focus:ring-primary-500 transition;
}
</style>
