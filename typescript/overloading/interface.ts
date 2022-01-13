import { CommandInteraction } from "discord.js";

export interface Command {
    name: string,
    description: string,

    error(eventName: "exception", command: Command, interaction: CommandInteraction, error: Error): void;
    error(eventName: "guildOnly", command: Command, interaction: CommandInteraction): void;
    error(eventName: "dmOnly", command: Command, interaction: CommandInteraction): void;
    error(eventName: "notOwner", command: Command, interaction: CommandInteraction): void;
    error(eventName: "timeout", command: Command, interaction: CommandInteraction, timeRemaining: Number): void;
    error(eventName: "noPermissions", command: Command, interaction: CommandInteraction): void;
    error(eventName: "lessArguments", command: Command, interaction: CommandInteraction): void;

    run(...args: any[]): void;
}

const help: Command = {
    name: "",
    description: "",
    error: (event, command, int, extraa?) => {
    },
    run: (...a) => {

    }

}