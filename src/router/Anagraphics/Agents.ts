import { RouteRecordRaw } from 'vue-router'

import AgentIndex from '../../views/Anagraphics/Agents/AgentIndex.vue';
import AgentEdit from '../../views/Anagraphics/Agents/AgentEdit.vue';
import AgentCreate from '../../views/Anagraphics/Agents/AgentCreate.vue';

const Agents : Array<RouteRecordRaw> = [
    {
		path: '/anagrafiche/agenti',
		name: 'anagraphics.agents.index',
		component: AgentIndex,		
	},
    {
		path: '/anagrafiche/agenti/crea',
        name: 'anagraphics.agents.create',
        component: AgentCreate
	},
	{
		path: '/anagrafiche/agenti/:id',
		name: 'anagraphics.agents.edit',
		props: true,
		component: AgentEdit,    
	}
];

export default Agents;