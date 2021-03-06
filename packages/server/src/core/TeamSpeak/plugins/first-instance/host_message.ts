import { Ts3 } from '@core/TeamSpeak';
import { convertToMilliseconds } from '@utils/time';
import log from '@utils/log';
import moment from 'moment';
import { ClientDisconnectEvent, ClientConnectEvent } from 'ts3-nodejs-library';

let loaded: ReturnType<typeof setInterval>;

export const main = async function (): Promise<void> {
	const { data } = info.config;
	const serverInfo = await Ts3.serverInfo();
	const replacements = {
		'[SERVER_ONLINE]': data.showQueryClients
			? serverInfo.virtualserverClientsonline
			: serverInfo.virtualserverClientsonline - serverInfo.virtualserverQueryclientsonline,
		'[SERVER_MAX_CLIENTS]': serverInfo.virtualserverMaxclients,
		'[DATE]': moment().format(data.format),
		'[%]': Math.round(
			((data.showQueryClients
				? serverInfo.virtualserverClientsonline
				: serverInfo.virtualserverClientsonline - serverInfo.virtualserverQueryclientsonline) /
				serverInfo.virtualserverMaxclients) *
				100
		)
	};
	let message = data.hostMessage;
	for (const key in replacements) {
		if (!replacements.hasOwnProperty(key)) continue;
		message = message.replace(key, replacements[key]);
	}
	Ts3.serverEdit({
		virtualserverHostmessage: message
	}).catch((err) => {
		log.error(`${info.name} error: ${err}`, 'ts3');
	});
};

export const load = async function (): Promise<void> {
	const { interval } = info.config;
	main();
	loaded = setInterval(async () => {
		main();
	}, convertToMilliseconds(interval));
};

export const clientconnect = async function (ev: ClientConnectEvent): Promise<void> {
	const { client } = ev;
	if (client.type === 0) {
		main();
	}
};

export const clientdisconnect = async function (ev: ClientDisconnectEvent): Promise<void> {
	const { client } = ev;
	if (client?.type === 0) {
		main();
	}
};

export const unload = function (): void {
	clearInterval(loaded);
};

export const info: CommonPluginConfig = {
	name: 'Host message',
	description:
		'This plugin allows you to change default host message with useful server information.',
	config: {
		enabled: false,
		data: {
			showQueryClients: false,
			hostMessage: `
			Welcome to [b]my server[/b]![b][color=orange][SERVER_ONLINE]/[SERVER_MAX_CLIENTS][/color][/b] users online!
			[b][url=https://git.io/JfLyF][color=orange]Visit github[/color][/url][/b]`
		},
		interval: {
			weeks: 0,
			days: 0,
			hours: 0,
			minutes: 0,
			seconds: 30
		}
	}
};
