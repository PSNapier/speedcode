<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts"></script>

<template>
	<!-- Sidebar -->
	<div class="flex flex-row text-neutral-50">
		<div class="flex h-screen w-[500px] flex-col bg-neutral-800">
			<div class="flex w-full flex-row justify-between p-4">
				<p class="text-2xl">Notvana</p>
				<button>All Areas</button>
			</div>

			<ul class="mt-4 w-full list-disc pl-8 text-lg">
				<li>Inbox</li>
				<li>Next</li>
				<li>Waiting</li>
				<li>Scheduled</li>
				<li>Someday</li>
				<li>Focus</li>
			</ul>

			<div>
				<p class="mt-4 text-lg">Projects</p>
				<ul class="mt-2 w-full list-disc pl-8">
					<li>Dev</li>
					<li>Writing</li>
					<li>House</li>
				</ul>
			</div>

			<div>
				<p class="mt-4 text-lg">Reference</p>
				<ul class="mt-2 w-full list-disc pl-8">
					<li>Archive</li>
				</ul>
			</div>

			<div>
				<p class="mt-4 text-lg">Tags</p>
				<div>
					<span>All</span><span>Household</span>
					<span>Hustle</span>
				</div>
			</div>

			<ul class="mt-4 w-full list-disc pl-8 text-lg">
				<li>Logbook</li>
				<li>Trash</li>
			</ul>
		</div>

		<!-- Main Content Area -->
		<div class="flex h-screen w-full flex-col bg-neutral-900">
			<div class="flex w-full flex-row justify-between p-4">
				<button>New Task</button>
				<input
					type="text"
					placeholder="Search"
					class="w-full rounded-md bg-neutral-800 p-2 text-neutral-50" />
				<button>Refresh</button>
				<button>Upgrade</button>
				<button>Settings</button>
			</div>

			<div>
				<div>Inbox</div>
				<div>New / unprocessed to-do's</div>
			</div>

			<div
				class="space-between space-between flex flex-row justify-between">
				<button>All</button>
				<div>
					<button>1</button>
					<button>2</button>
					<button>3</button>
				</div>
			</div>

			<div>
				<button>Next</button>
				<div>
					<div>
						<button>Handle</button>
						<input type="checkbox" />
						<input type="checkbox" />
						<span>Task 1</span>
						<span>Tags</span>
						<button>Options</button>
					</div>
				</div>
			</div>

			<div>
				<button>Someday</button>
				<div>
					<div>
						<button>Handle</button>
						<input type="checkbox" />
						<input type="checkbox" />
						<span>Task 2</span>
						<span>Tags</span>
						<button>Options</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
