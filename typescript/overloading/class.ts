import { CommandInteraction } from 'discord.js';
import { EventEmitter } from 'events';

class Handler extends EventEmitter {
    on(eventName: "commandsCreated", listener: (commands: Map<string, object>, commandAliases: Map<string, string>) => void): this;
    on(eventName: "normalCommand", listener: (command: object, commandData: any) => void): this;
    on(eventName: "slashCommand", listener: (command: object, interaction: CommandInteraction) => void): this;
    on(eventName: "exception", listener: (command: object, interaction: CommandInteraction, error: Error) => void): this;
    on(eventName: "guildOnly", listener: (command: object, interaction: CommandInteraction) => void): this;
    on(eventName: "dmOnly", listener: (command: object, interaction: CommandInteraction) => void): this;
    on(eventName: "notOwner", listener: (command: object, interaction: CommandInteraction) => void): this;
    on(eventName: "timeout", listener: (command: object, interaction: CommandInteraction, timeRemaining: Number) => void): this;
    on(eventName: "noPermissions", listener: (command: object, interaction: CommandInteraction) => void): this;
    on(eventName: "lessArguments", listener: (command: object, interaction: CommandInteraction) => void): this;

    on(eventName: string, listener: (...args: any[]) => void): this {
        return super.on(eventName, listener);
    }
}
