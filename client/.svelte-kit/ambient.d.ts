
// this file is generated — do not edit it


/// <reference types="@sveltejs/kit" />

/**
 * Environment variables [loaded by Vite](https://vitejs.dev/guide/env-and-mode.html#env-files) from `.env` files and `process.env`. Like [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), this module cannot be imported into client-side code. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * _Unlike_ [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), the values exported from this module are statically injected into your bundle at build time, enabling optimisations like dead code elimination.
 * 
 * ```ts
 * import { API_KEY } from '$env/static/private';
 * ```
 * 
 * Note that all environment variables referenced in your code should be declared (for example in an `.env` file), even if they don't have a value until the app is deployed:
 * 
 * ```
 * MY_FEATURE_FLAG=""
 * ```
 * 
 * You can override `.env` values from the command line like so:
 * 
 * ```bash
 * MY_FEATURE_FLAG="enabled" npm run dev
 * ```
 */
declare module '$env/static/private' {
	export const AUTH_SECRET: string;
	export const GITHUB_SECRET: string;
	export const GITHUB_ID: string;
	export const AUTH_GOOGLE_SECRET: string;
	export const AUTH_GOOGLE_ID: string;
	export const DB_NAME: string;
	export const DB_HOST: string;
	export const DB_USER: string;
	export const DB_PASSWORD: string;
	export const HISTFILESIZE: string;
	export const USER: string;
	export const npm_config_user_agent: string;
	export const STARSHIP_SHELL: string;
	export const npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
	export const npm_package_devDependencies_vite: string;
	export const npm_node_execpath: string;
	export const WT_PROFILE_ID: string;
	export const SHLVL: string;
	export const HOME: string;
	export const OLDPWD: string;
	export const NVM_BIN: string;
	export const npm_package_devDependencies_eslint_config_prettier: string;
	export const npm_package_devDependencies_eslint_plugin_svelte: string;
	export const NVM_INC: string;
	export const npm_package_dependencies_dotenv: string;
	export const npm_package_dependencies_moment: string;
	export const npm_config_engine_strict: string;
	export const WSL_DISTRO_NAME: string;
	export const npm_package_devDependencies_tailwindcss: string;
	export const npm_package_dependencies__auth_pg_adapter: string;
	export const NVM_DIR: string;
	export const WAYLAND_DISPLAY: string;
	export const npm_package_scripts_dev: string;
	export const npm_package_devDependencies_prettier: string;
	export const npm_package_dependencies__auth_core: string;
	export const LOGNAME: string;
	export const npm_package_type: string;
	export const PULSE_SERVER: string;
	export const WSL_INTEROP: string;
	export const NAME: string;
	export const _: string;
	export const npm_package_private: string;
	export const npm_package_devDependencies__sveltejs_adapter_node: string;
	export const npm_package_devDependencies_autoprefixer: string;
	export const npm_package_scripts_lint: string;
	export const npm_config_registry: string;
	export const TERM: string;
	export const npm_package_dependencies_argon2: string;
	export const npm_package_dependencies_next_auth: string;
	export const npm_package_devDependencies_prettier_plugin_tailwindcss: string;
	export const PATH: string;
	export const npm_package_name: string;
	export const NODE: string;
	export const XDG_RUNTIME_DIR: string;
	export const WT_SESSION: string;
	export const npm_config_frozen_lockfile: string;
	export const DISPLAY: string;
	export const npm_package_devDependencies_postcss_load_config: string;
	export const LANG: string;
	export const npm_package_devDependencies_eslint: string;
	export const ZSH_PLUGINS: string;
	export const npm_lifecycle_script: string;
	export const npm_package_devDependencies__sveltejs_kit: string;
	export const SHELL: string;
	export const npm_package_version: string;
	export const npm_lifecycle_event: string;
	export const NODE_PATH: string;
	export const npm_package_scripts_build: string;
	export const npm_package_devDependencies_svelte: string;
	export const npm_package_dependencies__auth_sveltekit: string;
	export const npm_package_scripts_format: string;
	export const PWD: string;
	export const npm_execpath: string;
	export const ZDOTDIR: string;
	export const NVM_CD_FLAGS: string;
	export const STARSHIP_SESSION_KEY: string;
	export const npm_package_devDependencies_postcss: string;
	export const npm_command: string;
	export const PNPM_SCRIPT_SRC_DIR: string;
	export const HISTFILE: string;
	export const npm_package_scripts_preview: string;
	export const npm_package_devDependencies_prettier_plugin_svelte: string;
	export const HOSTTYPE: string;
	export const WSL2_GUI_APPS_ENABLED: string;
	export const PNPM_HOME: string;
	export const WSLENV: string;
	export const npm_package_devDependencies__types_eslint: string;
	export const npm_package_dependencies_pg: string;
	export const INIT_CWD: string;
	export const NODE_ENV: string;
}

/**
 * Similar to [`$env/static/private`](https://kit.svelte.dev/docs/modules#$env-static-private), except that it only includes environment variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Values are replaced statically at build time.
 * 
 * ```ts
 * import { PUBLIC_BASE_URL } from '$env/static/public';
 * ```
 */
declare module '$env/static/public' {
	
}

/**
 * This module provides access to runtime environment variables, as defined by the platform you're running on. For example if you're using [`adapter-node`](https://github.com/sveltejs/kit/tree/main/packages/adapter-node) (or running [`vite preview`](https://kit.svelte.dev/docs/cli)), this is equivalent to `process.env`. This module only includes variables that _do not_ begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) _and do_ start with [`config.kit.env.privatePrefix`](https://kit.svelte.dev/docs/configuration#env) (if configured).
 * 
 * This module cannot be imported into client-side code.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/private';
 * console.log(env.DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 * 
 * > In `dev`, `$env/dynamic` always includes environment variables from `.env`. In `prod`, this behavior will depend on your adapter.
 */
declare module '$env/dynamic/private' {
	export const env: {
		AUTH_SECRET: string;
		GITHUB_SECRET: string;
		GITHUB_ID: string;
		AUTH_GOOGLE_SECRET: string;
		AUTH_GOOGLE_ID: string;
		DB_NAME: string;
		DB_HOST: string;
		DB_USER: string;
		DB_PASSWORD: string;
		HISTFILESIZE: string;
		USER: string;
		npm_config_user_agent: string;
		STARSHIP_SHELL: string;
		npm_package_devDependencies__sveltejs_vite_plugin_svelte: string;
		npm_package_devDependencies_vite: string;
		npm_node_execpath: string;
		WT_PROFILE_ID: string;
		SHLVL: string;
		HOME: string;
		OLDPWD: string;
		NVM_BIN: string;
		npm_package_devDependencies_eslint_config_prettier: string;
		npm_package_devDependencies_eslint_plugin_svelte: string;
		NVM_INC: string;
		npm_package_dependencies_dotenv: string;
		npm_package_dependencies_moment: string;
		npm_config_engine_strict: string;
		WSL_DISTRO_NAME: string;
		npm_package_devDependencies_tailwindcss: string;
		npm_package_dependencies__auth_pg_adapter: string;
		NVM_DIR: string;
		WAYLAND_DISPLAY: string;
		npm_package_scripts_dev: string;
		npm_package_devDependencies_prettier: string;
		npm_package_dependencies__auth_core: string;
		LOGNAME: string;
		npm_package_type: string;
		PULSE_SERVER: string;
		WSL_INTEROP: string;
		NAME: string;
		_: string;
		npm_package_private: string;
		npm_package_devDependencies__sveltejs_adapter_node: string;
		npm_package_devDependencies_autoprefixer: string;
		npm_package_scripts_lint: string;
		npm_config_registry: string;
		TERM: string;
		npm_package_dependencies_argon2: string;
		npm_package_dependencies_next_auth: string;
		npm_package_devDependencies_prettier_plugin_tailwindcss: string;
		PATH: string;
		npm_package_name: string;
		NODE: string;
		XDG_RUNTIME_DIR: string;
		WT_SESSION: string;
		npm_config_frozen_lockfile: string;
		DISPLAY: string;
		npm_package_devDependencies_postcss_load_config: string;
		LANG: string;
		npm_package_devDependencies_eslint: string;
		ZSH_PLUGINS: string;
		npm_lifecycle_script: string;
		npm_package_devDependencies__sveltejs_kit: string;
		SHELL: string;
		npm_package_version: string;
		npm_lifecycle_event: string;
		NODE_PATH: string;
		npm_package_scripts_build: string;
		npm_package_devDependencies_svelte: string;
		npm_package_dependencies__auth_sveltekit: string;
		npm_package_scripts_format: string;
		PWD: string;
		npm_execpath: string;
		ZDOTDIR: string;
		NVM_CD_FLAGS: string;
		STARSHIP_SESSION_KEY: string;
		npm_package_devDependencies_postcss: string;
		npm_command: string;
		PNPM_SCRIPT_SRC_DIR: string;
		HISTFILE: string;
		npm_package_scripts_preview: string;
		npm_package_devDependencies_prettier_plugin_svelte: string;
		HOSTTYPE: string;
		WSL2_GUI_APPS_ENABLED: string;
		PNPM_HOME: string;
		WSLENV: string;
		npm_package_devDependencies__types_eslint: string;
		npm_package_dependencies_pg: string;
		INIT_CWD: string;
		NODE_ENV: string;
		[key: `PUBLIC_${string}`]: undefined;
		[key: `${string}`]: string | undefined;
	}
}

/**
 * Similar to [`$env/dynamic/private`](https://kit.svelte.dev/docs/modules#$env-dynamic-private), but only includes variables that begin with [`config.kit.env.publicPrefix`](https://kit.svelte.dev/docs/configuration#env) (which defaults to `PUBLIC_`), and can therefore safely be exposed to client-side code.
 * 
 * Note that public dynamic environment variables must all be sent from the server to the client, causing larger network requests — when possible, use `$env/static/public` instead.
 * 
 * Dynamic environment variables cannot be used during prerendering.
 * 
 * ```ts
 * import { env } from '$env/dynamic/public';
 * console.log(env.PUBLIC_DEPLOYMENT_SPECIFIC_VARIABLE);
 * ```
 */
declare module '$env/dynamic/public' {
	export const env: {
		[key: `PUBLIC_${string}`]: string | undefined;
	}
}
